import PropTypes from 'prop-types'
import LangBtn from './LangBtn'

const LangBtnBlock = ({ links }) => {
  return (
    <div className='mt-2'>
      {Object.entries(links).map(([k, v], i) => {
        if (k !== 'id' && k !== 'img_uri' && k !== 'title')
          return <LangBtn key={i} lang={k} link={v} />
      })}
    </div>
  )
}

export default LangBtnBlock

LangBtnBlock.propTypes = {
  links: PropTypes.object.isRequired
}