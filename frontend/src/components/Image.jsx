import PropTypes from 'prop-types'

const Image = ({ uri, altText }) => {
  return <figure className='figure'>
    <img src={uri} className='figure-img img-fluid rounded' alt={altText} />
    </figure>
}

export default Image

Image.propTypes = {
  uri: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired
}