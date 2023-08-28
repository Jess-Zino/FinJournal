import {Space} from 'antd'
import PageContent from './PageContent'
import Navbar from '../Navbar/Navbar'
import propTypes from 'prop-types'

const Main = ({content}) => {
  return (
    <div className='App'>
    <Navbar/>
   <Space className='Main'>
     <PageContent className='content' content={content}/>
   </Space>
    </div>
  )
}

export default Main

Main.propTypes = {
  content: propTypes.element
  }