import PropTypes from 'prop-types'

const LangBtn = ({ lang, link }) => {
  const hrefLang = lang === 'idd' ? 'id' : lang

  let langFull
  switch (hrefLang) {
    case 'en':
      langFull = 'English'
      break
    case 'de':
      langFull = 'German'
      break
    case 'id':
      langFull = 'Indonesian'
      break
    case 'es':
      langFull = 'Spanish'
      break
    case 'uk':
      langFull = 'Ukrainian'
      break
    case 'ru':
      langFull = 'Russian'
      break
    case 'be':
      langFull = 'Belarusian'
      break
    case 'ja':
      langFull = 'Japanese'
      break
    default:
      break
  }

  if (link !== null && link !== '')
    return <div><a href={link} hrefLang={hrefLang}><button className='btn btn-light mb-2'>{langFull}</button></a></div>
}

export default LangBtn

LangBtn.propTypes = {
  lang: PropTypes.string.isRequired,
  link: PropTypes.string
}