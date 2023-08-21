import {Space} from 'antd'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import PageContent from './Components/PageContent/PageContent'
function App() {
  
  return (
    <div className='App'>
             <Navbar/>
      <Space className='Main'>
        <PageContent className='content'/>
      </Space>
      
    </div>
  )
}

export default App
