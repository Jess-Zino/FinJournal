import { Typography, Avatar,Tooltip } from "antd"
import PropTypes from 'prop-types';
import {UserOutlined,  LogoutOutlined }  from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Header = ({name}) => {
  const username = localStorage.getItem('user')
  const navigate = useNavigate();

    const { Title, Text } = Typography;
    const handleClick = ()=>{
      navigate('/')
      localStorage.clear()
     
    }
  return (
    <div className="Header">
        <div className="logo">
            <Typography>
                <Title level={3} className="logo" style={{color:"white", fontFamily:"Montserrat Alternates"}}>{name}</Title>
            </Typography>
        </div>
        <div className="profile">
        <Avatar size={30} style={{backgroundColor:"white", color:"white"}} icon={<UserOutlined style={{ fontSize: '20px', color: '#000' }}/>} />
        <Typography className="profiletxt">

        <Text style={{margin:"0px 10px 0px -10px",color:"white", fontFamily:"Poppins" }}>{username}</Text>
            <div style={{display:"flex",flexDirection:"column", alignItems:"center"}}>

            <Tooltip placement="bottom" title="Logout" color="#1677ff">
          
            <LogoutOutlined  style={{ fontSize: '20px', color: 'white'}} onClick={handleClick}/>
       
        </Tooltip>

            </div>
            </Typography>

</div>
    </div>
  )
}

export default Header
Header.propTypes = {
  name: PropTypes.string.isRequired, // Or appropriate prop type
};