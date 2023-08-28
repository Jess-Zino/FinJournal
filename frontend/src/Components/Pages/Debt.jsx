import Header from "../Header/Header"
import BubbleLarge from '../Bubbles/BubbleLarge'
import BubbleFull from '../Bubbles/BubbleFull'
import BubbleBtn from '../Bubbles/BubbleBtn'
import BubbleContain from '../Bubbles/BubbleContain'

import FadeIn from "../PageContent/Fadein"
import { Tabs } from 'antd';
import Add from '../InputForms/Add'
import Update from '../InputForms/Update'
import Category from '../InputForms/Category'
import { useState } from "react"
import Tables from "../Tables/Tables"
import DoughnutChartCategory from "../Tables/DoughnutChartCategory"
import Graphs from "../Tables/Graphs"
const Debt = () => {
  const [add, setAdd] = useState(false)
  const [category, setCategory] = useState(false)
  const [update, setUpdate] = useState(false)

  return (
    <div>
      <Header name="Debt" />
      <FadeIn>
   <Tabs
   style={{color:"white", fontFamily:"Montserrat"}}
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
        <BubbleLarge  content={<DoughnutChartCategory options="Debt"/>}/>
         </div>
         <div className="right">
          <BubbleBtn location="Debts" operation="Add" colors="#FB4141" click={()=>setAdd(true)}/>
          <BubbleBtn location="Debts"operation="Update" colors="#43C643" click={()=>setUpdate(true)}/>
          <BubbleBtn location="Debts" operation="Add New Category" colors="#0047AB" click={()=>setCategory(true)}/>
         </div>
         </div>
         <div className="down">
          <BubbleFull content={<Tables options="Debt"/>}/>
         </div>
         </div>
         <Add trigger={add} option="Debt" props="Add Expense" click={()=>setAdd(false)}/>
        <Category trigger={category} props="Add New Category" click={()=>setCategory(false)} option="Debt"/>
        <Update trigger={update} props="Add Expense" click={()=>setUpdate(false)}/>
         </FadeIn>,
      },
      {
        label: `Monthly Debts`,
        key: 2,
        children:<FadeIn>
        <div className="analysis"> <BubbleContain content={<Graphs optio="Debt"/>}/></div>
        </FadeIn>, 
      },
      {
        label: `Category Analysis`,
        key: 3,
        children: <FadeIn>
        <div className="analysis"> <BubbleContain content={<DoughnutChartCategory options="Debt"/>}/></div>
        </FadeIn>,
      }
     
    ]}
  />
       </FadeIn>
      </div> 
       )
}

export default Debt