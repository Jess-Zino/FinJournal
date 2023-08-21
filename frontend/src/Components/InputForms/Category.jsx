import {  InputNumber, Select, Button} from 'antd';
import './form.css'
const { Option } = Select;
import PropTypes from 'prop-types'
const Category = ({props, trigger, click}) => {
    const selectAfter = (

        <Select
          defaultValue="USD"
          style={{
            width: 20,
          }}
        >
          <Option value="USD">$</Option>
          <Option value="EUR">€</Option>
          <Option value="GBP">£</Option>
          <Option value="CNY">¥</Option>
        </Select>
      );
  return ((trigger)?
   ( 
   <div>
    

        <form  className='forms'>
        <h3>{props}</h3>
         <InputNumber CategoryonAfter={selectAfter} defaultValue={100} size='large'/>
        
  <Button type='primary' onClick={click}>Submit</Button>
         </form>
    </div>
  ):"")
}

export default Category
Category.propTypes = {
  click: PropTypes.func.isRequired,
  props: PropTypes.string.isRequired,
  trigger : PropTypes.bool.isRequired
}