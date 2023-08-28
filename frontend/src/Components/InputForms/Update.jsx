import './form.css'
import { Select, Button } from 'antd';
import axios from 'axios'
import { useState, useEffect } from 'react';
const { Option } = Select;
import PropTypes from 'prop-types'
const Update = ({props, trigger, click,option}) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };
  const fetchCategoriesByType = (type) => {
    axios.get(`http://localhost:3000/expCategory/${type}`)
      .then((res) => setCategories(res.data))
      .catch((error) => {
        console.error(error);
      });
  };
  

  useEffect(() => {
    fetchCategoriesByType(option);
  });

  const username = localStorage.getItem('user')




  return ((trigger)?
   ( 
   <div>
    

        <form  className='forms'>
        <h3>{props}</h3>

        <Select
      showSearch
      onChange={handleCategoryChange}
      value={selectedCategory}
      placeholder="Select a Category"
      optionFilterProp="children"
      size="large"
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
      style={{
        width: 250,
      }}
    >
      {categories.map((category) => (
        <Option key={category._id} value={category.category}>
          {category.category}
        </Option>
      ))}
    </Select>
    <div className='submitbtn'>
    <Button size="large" type='primary'danger onClick={handleSubmit}>Submit</Button>

    <Button size="large" type="default" onClick={click}>Cancel</Button>
</div>
      

         </form>
    </div>  
  ):"")
}

export default Update

Update.propTypes = {
  click: PropTypes.func.isRequired,
  props: PropTypes.string.isRequired,
  trigger : PropTypes.bool.isRequired,
  option : PropTypes.string
}