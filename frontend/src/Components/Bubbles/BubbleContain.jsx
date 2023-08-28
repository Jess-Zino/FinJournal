import PropTypes from 'prop-types';
const BubbleContain = ({content}) => {
  return (
    <div className=' bubble contained'>{content}</div>
  )
}

export default BubbleContain

BubbleContain.propTypes = {
  content: PropTypes.element, 
  location: PropTypes.string,
  colors:PropTypes.string
};