import propTypes from 'prop-types'
const PageContent = ({content}) => {
  return (
        <div className="Content">{content}</div>
  )
}

export default PageContent
PageContent.propTypes = {
content: propTypes.element 
}