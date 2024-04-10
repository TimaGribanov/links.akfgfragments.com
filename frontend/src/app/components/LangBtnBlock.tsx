import LangBtn from './LangBtn'

const LangBtnBlock = ({ links }: { links: string }) => {
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