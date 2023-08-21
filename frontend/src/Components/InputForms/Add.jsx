import {  InputNumber, Select, Button} from 'antd';
import './form.css'
const { Option } = Select;
import PropTypes from 'prop-types'
const Add = ({props, trigger, click}) => {
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
         <InputNumber addonAfter={selectAfter} defaultValue={100} size='large'/>
         <Select
    showSearch
    placeholder="Select a Category"
    optionFilterProp="children"
    size='large'
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'tom',
        label: 'Tom',
      },
    ]}
  />
  <Button type='primary' onClick={click}>Submit</Button>
         </form>
    </div>
  ):"")
}

export default Add
Add.propTypes = {
  click: PropTypes.func.isRequired,
  props: PropTypes.string.isRequired,
  trigger : PropTypes.bool.isRequired
}