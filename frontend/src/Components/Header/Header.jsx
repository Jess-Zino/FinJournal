import { Typography, Avatar,Tooltip } from "antd"
import PropTypes from 'prop-types';
import {UserOutlined,  LogoutOutlined }  from '@ant-design/icons';
const Header = ({name}) => {
    const { Title, Text } = Typography;
  return (
    <div className="Header">
        <div className="logo">
            <Typography>
                <Title level={3} className="logo" style={{color:"#151618", fontFamily:"Montserrat Alternates"}}>{name}</Title>
            </Typography>
        </div>
        <div className="profile">
        <Avatar size={30} style={{backgroundColor:"#151618", color:"white"}} icon={<UserOutlined style={{ fontSize: '20px', color: 'white' }}/>} />
        <Typography className="profiletxt">
        <Text style={{margin:"0px 10px 0px -10px",color:"#151618"}}>John Doe</Text>
            <div style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
            <Tooltip placement="bottom" title="Logout" color="#1677ff">
            <LogoutOutlined  style={{ fontSize: '20px', color: '#151618' }}/>

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