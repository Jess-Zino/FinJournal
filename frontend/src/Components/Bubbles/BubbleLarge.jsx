import propTypes from 'prop-types'
const BubbleLarge = ({content}) => {
  return (
    <div className="bubble large">{content}</div>
  )
}

export default BubbleLarge
BubbleLarge.propTypes ={
  content: propTypes.string.isRequired
}