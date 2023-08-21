import Header from "../Header/Header"
import BubbleLarge from '../Bubbles/BubbleLarge'
import BubbleFull from '../Bubbles/BubbleFull'
import BubbleBtn from '../Bubbles/BubbleBtn'
import BubbleContain from '../Bubbles/BubbleContain'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import FadeIn from "../PageContent/Fadein"
import { Tabs } from 'antd';
import Add from '../InputForms/Add'
import Update from '../InputForms/Update'
import Category from '../InputForms/Category'
import { useState } from "react"
const Debt = () => {
  const [add, setAdd] = useState(false)
  const [category, setCategory] = useState(false)
  const [update, setUpdate] = useState(false)
  const data = {
    labels: ['Savings', 'Debt', 'Income', 'Debts'],
    datasets: [
      {
        label: '# of Votes',
        data: [1, 1, 1, 1],
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
      <Header name="Debt" />
      <FadeIn>
   <Tabs
   style={{color:"#151618", fontFamily:"Montserrat"}}
    defaultActiveKey="1"
    centered
    items={[{
        label: `Overview`,
        key: 0,
        children: <FadeIn>
        <div className="analysis"> <BubbleContain/></div>
        </FadeIn>,
      },
      {
        label: `Update Debts`,
        key: 1,
        children: <FadeIn>
         <div className="others">
        <div className="up">
        <div className="left">
        <BubbleLarge/>
         </div>
         <div className="right">
          <BubbleBtn location="Debts" operation="Add" colors="#FB4141" click={()=>setAdd(true)}/>
          <BubbleBtn location="Debts"operation="Update" colors="#43C643" click={()=>setUpdate(true)}/>
          <BubbleBtn location="Debts" operation="Add New Category" colors="#0047AB" click={()=>setCategory(true)}/>
         </div>
         </div>
         <div className="down">
          <BubbleFull/>
         </div>
         </div>
         <Add trigger={add} props="Add Expense" click={()=>setAdd(false)}/>
        <Category trigger={category} props="Add Expense" click={()=>setCategory(false)}/>
        <Update trigger={update} props="Add Expense" click={()=>setUpdate(false)}/>
         </FadeIn>,
      },
      {
        label: `Monthly Debts`,
        key: 2,
        children:<FadeIn>
        <div className="analysis"> <BubbleContain /></div>
        </FadeIn>, 
      },
      {
        label: `Category Analysis`,
        key: 3,
        children: <FadeIn>
        <div className="analysis"> <BubbleContain content={<Doughnut style={{width: '100%', height: '80vh'}} data={data}/>}/></div>
        </FadeIn>,
      }
     
    ]}
  />
       </FadeIn>
      </div> 
       )
}

export default Debt