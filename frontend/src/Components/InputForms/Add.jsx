import  { useState, useEffect } from 'react';
import { Input, Select, Button } from 'antd';
import './form.css';
import axios from 'axios';
import PropTypes from 'prop-types';

const { Option } = Select;

const Add = ({ props, trigger, click, option }) => {
  const [categories, setCategories] = useState([]);
  const [selectedcategory, setSelectedCategory] = useState([]); // Initialize with undefined

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const fetchCategoriesByType = (username, type) => {
    axios
      .get(`http://localhost:3000/expCategory/${username}/${type}`)
      .then((res) => setCategories(res.data))
      .catch((error) => {
        console.error(error);
      });
  };

  const username = localStorage.getItem('user');

  const [amount, setAmount] = useState(true);
  const handleSubmit = () => {
    const url = 'http://localhost:3000/transaction';
    axios.post(url, { username, amount, selectedcategory, option })
      .then((res) => {
        console.log(res);
        click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCategoriesByType(username, option);
  }); // Add dependency array to trigger useEffect

  return trigger ? (
    <div>
      <form className="forms">
        <h3>{props}</h3>
        <Input
          style={{ width: '250px', color: 'white' }}
          size="large"
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <Select
          showSearch
          onChange={handleCategoryChange}
          value={selectedcategory}
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
        <div className="submitbtn">
          <Button size="large" type="primary" onClick={handleSubmit}>
            Submit
          </Button>
          <Button size="large" type="default" onClick={click}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  ) : (
    ''
  );
};

export default Add;

Add.propTypes = {
  click: PropTypes.func.isRequired,
  props: PropTypes.string.isRequired,
  trigger: PropTypes.bool.isRequired,
  option: PropTypes.string.isRequired,
};
