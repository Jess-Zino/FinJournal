import { Menu,Typography, Button} from "antd"
import { DashboardOutlined, GiftOutlined,TrophyOutlined,ShoppingOutlined,FrownOutlined, FundOutlined,UserOutlined,  MenuFoldOutlined, MenuUnfoldOutlined, } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
    const username = localStorage.getItem('user')
    const navigate =  useNavigate()
    const { Title } = Typography;
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
  return (
    <div className="Navbar">
          <Typography>
                <Title level={4}className="logo" style={{color:"#1677ff", fontFamily:"Montserrat Alternates"}}>FinRec</Title>
            </Typography>
         <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
        <Menu className="nav"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        inlineCollapsed={collapsed}
        theme="dark"
        onClick={(item)=>{
            navigate(item.key)
        }} 
        
        items={
            [ 
            {
                label:<Typography><Title level={5} style={{color:"white"}}>{username}</Title></Typography>,
                disabled:"true",
                icon:<UserOutlined  style={{ fontSize: '20px', color: 'white' }}/>,
                },
                {
                    label:"Dashboard",
                    icon:<DashboardOutlined   style={{ fontSize: '20px', color: 'white' }}/>,
                    key:"/dashboard"
                },
                {
                    label:"Income",
                    icon:<GiftOutlined style={{ fontSize: '20px', color: 'white' }} />,
                    key:"/income"
                },
                {
                    label:"Savings",
                    icon:<TrophyOutlined style={{ fontSize: '20px', color: 'white' }} />,
                    key:"/savings"
                },
                {
                    label:"Expenses",
                    icon:<ShoppingOutlined  style={{ fontSize: '20px', color: 'white' }}/>,
                    key:"/expense"
                },
                {
                    label:"Debt",
                    icon:<FrownOutlined  style={{ fontSize: '20px', color: 'white' }} />,
                    key:"/debt"
                },
                {
                    label:"Analysis",
                    icon:<FundOutlined  style={{ fontSize: '20px', color: 'white' }}/>,
                    key:"/analysis"
                }
            ]
        }
        ></Menu>
    </div>
  )
}

export default Navbar