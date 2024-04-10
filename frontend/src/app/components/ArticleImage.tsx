const ArticleImage = ({
  uri, altText
}:
{
  uri: string,
  altText: string
}) => {
  return <figure className='figure'>
    <img src={uri} className='figure-img img-fluid rounded' alt={altText} />
  </figure>
}

export default ArticleImage