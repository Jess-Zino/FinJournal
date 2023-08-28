import BubbleFull from "../Bubbles/BubbleFull"
import BubbleSmall from "../Bubbles/BubbleSmall"
import Header from "../Header/Header"
import FadeIn from "../PageContent/Fadein"
import { GiftOutlined,TrophyOutlined,ShoppingOutlined,FrownOutlined} from '@ant-design/icons';

import BubbleCard from "../Bubbles/BubbleCard";
import DashTable from "../Tables/DashTable";
import DoughnutChart from "../Tables/DoughnutChart"
const Dashboard = () => {

  return (
    <div>
      
      <Header name="Dashboard" />
      <FadeIn>
      <div className="dashboard">
        <div className="up">
        <div className="left">
          <BubbleSmall item="Income" content={<h2 style={{color:"#43C643"}}>Income</h2>} prefix={<GiftOutlined /> } />

          <BubbleSmall item="Expenses" content={ <h2 style={{color:"#FB4141"}}>Expenses</h2>} prefix={<ShoppingOutlined />}/>
          <BubbleSmall item="Savings" content={ <h2 style={{color:"#0047AB"}}>Savings</h2>} prefix={<TrophyOutlined />}/>
          <BubbleSmall item="Debt"  content={ <h2 style={{color:"rgb(255, 165, 0)"}}>Debt</h2>}  prefix={<FrownOutlined />}/>
         </div>
         <div  className="right">
          <BubbleCard content={<DoughnutChart/>  }/>
          { /*<BubbleCard content={
            <div className="dashSum">
              <h1 style={{color:"#0047AB"}}>Summary</h1>
              <div className="summary">
                <div className="item">
                <h2>Income is on Budget</h2>
                </div>
                <div className="item">
                <h2>Expenses  is on Budget</h2>
                </div>
                <div className="item">
                <h2>Savings  is over Budget</h2>
                </div>
                <div className="item">
                <h2>Debt is on Budget</h2>
                </div>

              </div>
              </div>
          }/>*/}
         </div>
         </div>
         <div className="down">
          <BubbleFull content={<DashTable/>}/>
         </div>
       </div>
       </FadeIn>
    </div>
    
  )
}

export default Dashboard