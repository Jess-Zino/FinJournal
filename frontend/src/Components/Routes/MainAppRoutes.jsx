import { Routes, Route} from 'react-router-dom'
import Main from '../PageContent/Main'
import Login from '../Pages/Login'
import Expenses from '../Pages/Expenses'
import Savings from '../Pages/Savings'
import Debt from '../Pages/Debt'
import Income from '../Pages/Income'
import Analysis from '../Pages/Analysis'
import Dashboard from '../Pages/Dashboard'
import SignUp from '../Pages/SignUp'
const MainAppRoutes = () => {
  return (
  
        <Routes>
             <Route path='/' element={<Login/>}></Route>
             <Route path='/SignUp' element={<SignUp/>}></Route>
            <Route path='/dashboard' element={<Main content={<Dashboard/>}/>}></Route>
            <Route path='/expense' element={<Main content={<Expenses />}/>}></Route>
            <Route path='/savings' element={<Main content={<Savings />}/>}></Route>
            <Route path='/Debt' element={<Main content={<Debt />}/>}></Route>
            <Route path='/income' element={<Main content={<Income />}/>}></Route>
            <Route path='/analysis' element={<Main content={<Analysis/>}/>}></Route>  
        </Routes>

  )
}

export default MainAppRoutes