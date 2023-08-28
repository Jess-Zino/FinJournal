import Password from 'antd/es/input/Password'
import './auth.css'
import { Link } from 'react-router-dom'
import { Input, Button } from 'antd'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  
  const [username, setName] = useState(true)
  const [password, setPassword] = useState(true)

  const navigate = useNavigate();
  const handleLogin =  (event) => {
      event.preventDefault();
      const url = "http://localhost:3000/userLogin"
      
      axios.post(url,{username, password}).then(res=>{
          console.log(res)
          const data = res.data;

          if (data.success) {
            localStorage.setItem('user', username);

            navigate('/dashboard')
          } else {
           alert(data.message)
           setName(' ')
           setPassword(' ')
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
          <h2>Login</h2>
          <form className='right'>
          <div className='formItem'>
          <label>Username</label>
        <Input onChange={e=>setName(e.target.value)} style={{
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
        <Link to='/dashboard'>
        <Button onClick={handleLogin} style={{
           boxShadow:"0px 4px 5px rgba(0, 0, 0, 0.2)"
        }}>Login</Button>
        </Link>
        
        </form>
        <Link className="acc" to='/SignUp'>Create Account</Link>
        </div>
      
    </div>
  )
}

export default Login