import Image from 'next/image'

const ArticleImage = ({
  uri, altText
}:
{
  uri: string,
  altText: string
}) => {
  return <figure className='figure'>
    <Image
      src={uri}
      width={500}
      height={300}
      className='figure-img img-fluid rounded'
      alt={altText}
    />
  </figure>
}

export default ArticleImage