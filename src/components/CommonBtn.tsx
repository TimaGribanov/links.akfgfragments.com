const CommonBtn = ({linkType, href}: {linkType: string, href: string}) => {
  return <div><a href={href}><button className='btn btn-light mb-2'>{linkType}</button></a></div>
}

export default CommonBtn