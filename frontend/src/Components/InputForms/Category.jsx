import {  Input, Button, ColorPicker} from 'antd';
import './form.css'
import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'
const Category = ({props, trigger, click, option}) => {
  const username = localStorage.getItem('user')
  const [color, setColor] = useState("#1677ff33")
  const [category, setCategory] = useState(true)
  const handleSubmit = ()=>{
    const url = "http://localhost:3000/addCategory"
    axios.post(url,{username,category, option, color}).then(res=>{
        console.log(res)
        click()
    }
).catch(err =>{
  console.log(err)
    })
  
  }
  return ((trigger)?
   ( 
   <div>
    

        <form  className='forms'>
        <h3>{props}</h3>
         <Input style={{color:"white"}} defaultValue={''} size='large'onChange={e=>{setCategory(e.target.value)}}/>
        <ColorPicker  ovalue={color} onChangeComplete={(color) => {  setColor(color.toHexString()) }}/>
    <div className='submitbtn'>
    <Button size="large" type='primary' onClick={handleSubmit}>Submit</Button>

    <Button size="large" type="default" onClick={click}>Cancel</Button>
</div>
         </form>
    </div>
  ):"")
}

export default Category
Category.propTypes = {
  click: PropTypes.func.isRequired,
  props: PropTypes.string.isRequired,
  trigger : PropTypes.bool.isRequired,
  option : PropTypes.string,
}