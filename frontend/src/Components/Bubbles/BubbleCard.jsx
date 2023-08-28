
import propTypes from 'prop-types'

const BubbleCard = ({content}) => {
  return (
    <div className='bubble card'>{content}</div>
  )
}

export default BubbleCard
BubbleCard.propTypes ={
    content: propTypes.element
  }