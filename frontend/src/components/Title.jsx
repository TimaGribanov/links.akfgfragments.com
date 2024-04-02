import PropTypes from 'prop-types'

const Title =({ title }) => {
  document.title = `${title} – akfgfragments`
  return <div><h1>{title}</h1></div>
}

export default Title

Title.propTypes = {
  title: PropTypes.string.isRequired
}