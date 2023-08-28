import Password from 'antd/es/input/Password'
import './auth.css'
import { Link } from 'react-router-dom'
import { Input, Button } from 'antd'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    
  const [firstname, setFname] = useState(true)
  const [lastname, setLname] = useState(true)
  const [username, setUname] = useState(true)
  const [password, setPassword] = useState(true)
  const [email, setMail] = useState(true)

  const navigate = useNavigate();
  const handleSignUp =  () => {

      const url = "http://localhost:3000/userRegister"
      
      axios.post(url,{username, password, firstname, lastname, email}).then(res=>{
          console.log(res)
          const data = res.data;

          if (data.success) {
            navigate('/')
            alert(data.message)
          } else {
           alert(data.message)
          }
      }).catch(err =>{
    console.log(err)
      })
     
    }

  return (
    <div className="login">
        <div className='left'>
          <h1>FinRec</h1>
        </div>
        <div className='right'>
          <h2>SignUp</h2>
          <form className='right'>

          <div className='formItem'>
          <label>First Name</label>
        <Input onChange={e=>setFname(e.target.value)} style={{
         width:"30vw",
         fontFamily: "Poppins",
         boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.3)"
        }}/>
        </div>

        <div className='formItem'>
          <label>Last Name</label>
        <Input onChange={e=>setLname(e.target.value)} style={{
         width:"30vw",
         fontFamily: "Poppins",
         boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.3)"
        }}/>
        </div>
        <div className='formItem'>
          <label>Username</label>
        <Input onChange={e=>setUname(e.target.value)} style={{
         width:"30vw",
         fontFamily: "Poppins",
         boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.3)"
        }}/>
        </div>
        <div className='formItem'>
          <label>E-mail</label>
        <Input onChange={e=>setMail(e.target.value)} style={{
         width:"30vw",
         fontFamily: "Poppins",
         boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.3)"
        }}/>
        </div>
        <div className='formItem'>
          <label>Password</label>
                <Password onChange={e=>setPassword(e.target.value)} style={{
                   fontFamily: "Poppins",
                   boxShadow:"0px 4px 5px rgba(0, 0, 0, 0.2)",
         width:"30vw",
        }}/>
        </div>
        <Link to='/'>
        <Button onClick={handleSignUp} style={{
           boxShadow:"0px 4px 5px rgba(0, 0, 0, 0.2)"
        }}>SignUp</Button>
        </Link>
        
        </form>
        <Link to='/' className='acc'>
       Already Have an Account
        </Link>
        </div>
        
      
    </div>
  )
}

export default SignUp