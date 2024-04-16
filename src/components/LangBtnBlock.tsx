import LangBtn from './LangBtn'
import CommonBtn from './CommonBtn'

const LangBtnBlock = ({ links }: { links: {} }) => {
  if (links.id === 0) {
    return (
      <div className='mt-2'>
        <CommonBtn key='1' linkType='Website' href='https://akfgfragments.com' />
        <CommonBtn key='2' linkType='Instagram' href='https://www.instagram.com/akfgfragments_com/' />
        <CommonBtn key='3' linkType='Facebook' href='https://facebook.com/akfgfragmentscom' />
        <CommonBtn key='4' linkType='Twitter' href='https://twitter.com/AkfgfragmentsEn' />
        <CommonBtn key='5' linkType='Discord' href='https://discord.gg/mQJ4TcjM3h' />
        <CommonBtn key='6' linkType='Youtube' href='https://www.youtube.com/@akfgfragmentscom' />
        <CommonBtn key='7' linkType='Telegram' href='https://t.me/akfgfragments' />
        <CommonBtn key='8' linkType='Reddit' href='https://www.reddit.com/r/AsianKungFuGeneration/' />
      </div>
    )
  }

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