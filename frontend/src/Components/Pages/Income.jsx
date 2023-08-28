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

const Income = () => {
  const [add, setAdd] = useState(false)
  const [category, setCategory] = useState(false)
  const [update, setUpdate] = useState(false)

  return (
    <div>
      <Header name="Income" />
      
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
        label: `Update Incomes`,
        key: 1,
        children: <FadeIn>
         <div className="others">
        <div className="up">
        <div className="left">
        <BubbleLarge content={<DoughnutChartCategory options="Income"/>}/>
         </div>
         <div className="right">
          <BubbleBtn location="Income" operation="Add" colors="#FB4141" click={()=>setAdd(true)}/>
          <BubbleBtn location="Income"operation="Update" colors="#43C643" click={()=>setUpdate(true)}/>
          <BubbleBtn location="Income" operation="Add New Category of" colors="#0047AB" click={()=>setCategory(true)}/>
         </div>
         </div>
         <div className="down">
          <BubbleFull content={<Tables options="Income"/>}/>
         </div>
         </div>
         <Add trigger={add} option="Income" props="Add Income" click={()=>setAdd(false)}/>
        <Category trigger={category}option="Income" props="Add Expense" click={()=>setCategory(false)}/>
        <Update trigger={update} props="Add Expense" click={()=>setUpdate(false)}/>
         </FadeIn>,
      },
      {
        label: `Monthly Incomes`,
        key: 2,
        children:<FadeIn>
        <div className="analysis"> <BubbleContain content={<Graphs optio="Income"/>}/></div>
        </FadeIn>, 
      },
      {
        label: `Category Analysis`,
        key: 3,
        children: <FadeIn>
        <div className="analysis"> <BubbleContain content={<DoughnutChartCategory options="Income"/>}/></div>
        </FadeIn>,
      }
     
    ]}
  />
       </FadeIn>
    </div> 
     )
}

export default Income