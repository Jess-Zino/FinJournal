import PropTypes from 'prop-types';
const BubbleContain = ({content}) => {
  return (
    <div className=' bubble contained'>{content}</div>
  )
}

export default BubbleContain

BubbleContain.propTypes = {
  content: PropTypes.element.isRequired, 
  location: PropTypes.string.isRequired,
  colors:PropTypes.string.isRequired
};