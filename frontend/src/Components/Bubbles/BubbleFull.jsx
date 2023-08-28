    import propTypes from 'prop-types'
    const BubbleFull = ({content}) => {
      return (
        <div className="bubble full">{content}</div>
      )
    }
    
    export default BubbleFull
BubbleFull.propTypes ={
  content: propTypes.element
}