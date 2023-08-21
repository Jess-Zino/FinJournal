import './bubbles.css'
import PropTypes from 'prop-types'
const BubbleSmall = ({content}) => {
  return (
    <div className='bubble small'>{content}</div>
  )
}

export default BubbleSmall
BubbleSmall.propTypes={
  content:PropTypes.element.isRequired,  //required
}