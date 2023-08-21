import PropTypes from 'prop-types';

const BubbleBtn = ({operation,location, colors, click }) => {
  return (
    <button className="bubble btn" style={{color:colors}} onClick={click}>
      {operation} {location}
    </button>
  )
}

export default BubbleBtn

BubbleBtn.propTypes = {
  operation: PropTypes.string.isRequired, 
  location: PropTypes.string.isRequired,
  colors:PropTypes.string.isRequired,
  click:PropTypes.func.isRequired
};