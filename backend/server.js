const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
const userModel = require('./Modals/users')
const cashModel = require('./Modals/Transactions')
const expCategoryModel = require('./Modals/expCategory')
const userLogin = require('./APIs/Login')
const Register = require('./APIs/Registration')
const transaction = require('./APIs/transaction')
const addCategory = require('./APIs/AddCategory')
const getCategory = require('./APIs/GetCategory')
const sum = require('./APIs/getSum')
const Dsum = require('./APIs/DoughnutSum')
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/testing")

/* Login API */

app.post('/userLogin', userLogin);
 /*Login API */


 /* SignUp API */
app.post('/userRegister',Register );
 /* SignUp API */


/*transaction creation API */
 app.post('/transaction', transaction );
/*transaction creation API */

/*Add Category API */
app.post('/addCategory', addCategory );
/*Add Category API */
/*Get Category API */
 app.get('/api/items',  (req, res) => {

     userModel.find({}).then(items=>res.json(items)).catch( (err)=> {
      console.error(err);
      res.status(500).json({ error: 'Server Error' });
    })
  });
  /*Get Category by username API */

  app.get('/expCategory/:username/:option?', getCategory );
    /*Get Category by username API */
    app.get('/transaction/:username?/:option/sum', sum);
    app.post('/transaction/:username/sum', Dsum);

    app.get('/transaction/:username/:option/:selectedcategory/sum', (req, res) => {
        const username = req.params.username;
        const option = req.params.option;
        const selectedCategoriesArray = req.params.selectedcategory.split(','); // Convert comma-separated string to an array of selected categories
    
        const query = username ? { username: username, option: option, selectedcategory: { $in: selectedCategoriesArray } } : { option: option, selectedcategory: { $in: selectedCategoriesArray } };
    
        cashModel.aggregate([
            { $match: query },
            { $group: { _id: '$selectedcategory', totalAmount: { $sum: '$amount' } } }
        ])
        .then((categorySums) => {
            const sumObject = selectedCategoriesArray.reduce((result, category) => {
                const categorySum = categorySums.find((sum) => sum._id === category);
                result[category] = categorySum ? categorySum.totalAmount : 0;
                return result;
            }, {});
            res.json(sumObject);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: 'Server Error' });
        });
    })
    app.get('/transaction/:username/:option/:selectedcategory/sum', (req, res) => {
        const username = req.params.username;
        const option = req.params.option;
        const selectedCategoriesArray = req.params.selectedcategory.split(',');
      
        const query = username
          ? { username: username, option: option, selectedcategory: { $in: selectedCategoriesArray } }
          : { option: option, selectedcategory: { $in: selectedCategoriesArray } };
      
        cashModel
          .aggregate([
            { $match: query },
            {
              $group: {
                _id: { month: { $month: '$dateField' }, category: '$selectedcategory' },
                totalAmount: { $sum: '$amount' },
              },
            },
          ])
          .then((categorySums) => {
            const sumObject = categorySums.reduce((result, entry) => {
              const month = entry._id.month;
              const category = entry._id.category;
              if (!result[month]) {
                result[month] = {};
              }
              result[month][category] = entry.totalAmount;
              return result;
            }, {});
            res.json(sumObject);
          })
          .catch((err) => {
            console.error(err);
            res.status(500).json({ error: 'Server Error' });
          });
      });
      
  app.get('/transaction/:username?', (req, res) => {
    const username = req.params.username;

    const query = username ? { username: username } : {}; // Add a query for filtering by username if provided

    cashModel.find(query)
        .sort({ createdAt: -1 })
        .then((items) => res.json(items))
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: 'Server Error' });
        });
});


app.get('/transactions/:username/:option?', (req, res) => {
    const { username, option } = req.params;
    const query = option ? { option: option, username: username } : { username: username };

    cashModel.find(query)
        .sort({ createdAt: -1 })
        .then((items) => res.json(items))
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: 'Server Error' });
        });
});




/*app.get('/bargraph/:username?', (req, res) => {
    const username = req.params.username;

    const query = username ? { username: username } : {}; // Add a query for filtering by username if provided

    // Get the current date and extract the year and month
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Month is 0-indexed, so add 1

    cashModel.find({
        ...query,
        $expr: {
            $and: [
                { $eq: [{ $year: '$createdAt' }, year] }, // Compare year
                { $eq: [{ $month: '$createdAt' }, month] } // Compare month
            ]
        }
    })
    .then((items) => res.json(items))
    .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
    });
});*/



  

app.listen(3000, (err) => {
    if (err) throw err
    console.log("connected on port 3000")
})