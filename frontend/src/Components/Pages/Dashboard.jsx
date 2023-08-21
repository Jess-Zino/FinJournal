import BubbleFull from "../Bubbles/BubbleFull"
import BubbleSmall from "../Bubbles/BubbleSmall"
import Header from "../Header/Header"
import CountUp from 'react-countup';
import FadeIn from "../PageContent/Fadein"
import { Statistic} from 'antd';
import { GiftOutlined,TrophyOutlined,ShoppingOutlined,FrownOutlined} from '@ant-design/icons';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import BubbleCard from "../Bubbles/BubbleCard";
import DashTable from "../Tables/DashTable";
const Dashboard = () => {
  const formatter = (value) => <CountUp end={value} separator="," />;
  const data = {
    labels: ['Savings', 'Debt', 'Income', 'Expenses'],
    datasets: [
      {
        label: '# of Votes',
        data: [1129, 500, 1129, 903],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',

        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',

        ],
        borderWidth: 1,
      },
    ],
  };
  ChartJS.register(ArcElement, Tooltip, Legend);
  return (
    <div>
      
      <Header name="Dashboard" />
      <FadeIn>
      <div className="dashboard">
        <div className="up">
        <div className="left">
          <BubbleSmall content={ <Statistic valueStyle={{color:"#151618"}} title={<h2 style={{color:"#43C643"}}>Income</h2>} value={1128} formatter={formatter} precision={2} prefix={<GiftOutlined />}/>} />

          <BubbleSmall content={ <Statistic valueStyle={{color:"#151618"}} title={<h2 style={{color:"#FB4141"}}>Expenses</h2>} value={903} formatter={formatter} precision={2} prefix={<ShoppingOutlined />}/>}/>
          <BubbleSmall content={ <Statistic valueStyle={{color:"#151618"}} title={<h2 style={{color:"#43C643"}}>Savings</h2>} value={1129} formatter={formatter} precision={2} prefix={<TrophyOutlined />}/>}/>
          <BubbleSmall content={ <Statistic valueStyle={{color:"#151618"}} title={<h2 style={{color:"#FB4141"}}>Debt</h2>} value={500} formatter={formatter} precision={2} prefix={<FrownOutlined />}/>}/>
         </div>
         <div  className="right">
          <BubbleCard content={
            <Doughnut style={{width: '100%', height: '80vh'}} data={data}/>
          }/>
           <BubbleCard content={
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
          }/>
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