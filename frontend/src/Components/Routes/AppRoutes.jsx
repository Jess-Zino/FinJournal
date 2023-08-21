import { Routes, Route} from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import Expenses from '../Pages/Expenses'
import Savings from '../Pages/Savings'
import Debt from '../Pages/Debt'
import Income from '../Pages/Income'
import Analysis from '../Pages/Analysis'

const AppRoutes = () => {
  return (
  
        <Routes>
            <Route path='/' element={<Dashboard/>}></Route>
            <Route path='/expense' element={<Expenses/>}></Route>
            <Route path='/savings' element={<Savings />}></Route>
            <Route path='/Debt' element={<Debt />}></Route>
            <Route path='/income' element={<Income />}></Route>
            <Route path='/analysis' element={<Analysis/>}></Route>

        </Routes>

  )
}

export default AppRoutes