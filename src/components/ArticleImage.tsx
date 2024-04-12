import Image from 'next/image'

const imageLoader = ({ src, width, quality }:
  { src: string, width: number, quality?: number | undefined}) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const ArticleImage = ({
  uri, altText
}:
{
  uri: string,
  altText: string
}) => {
  return <figure className='figure'>
    <Image
      loader={imageLoader}
      src={uri}
      width={500}
      height={300}
      className='figure-img img-fluid rounded'
      alt={altText}
    />
  </figure>
}

export default ArticleImage