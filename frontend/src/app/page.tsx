import { useState, useEffect } from 'react'

import Title from './components/Title'
import ArticleImage from './components/ArticleImage'
import LangBtnBlock from './components/LangBtnBlock'
import Footer from './components/Footer'

const Home = () => {
  const [links, setLinks] = useState({})

  const getCurrentHost =
    import.meta.env.MODE === 'development'
      ? 'http://localhost:3006'
      : 'https://links.akfgfragments.com'

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const params = new URLSearchParams(window.location.search)
    const id = params.get('id')

    const response = await axios
      .get(`${getCurrentHost}/api/links`, { params: { id: id } })
    
    setLinks(response.data[0])
  }

  return (
    <div className='container text-center w-75'>
      <Helmet>
        <meta name='og:image' content={links.img_uri} />
        <meta name='og:image:alt' content={links.title} />
        <meta name='og:type' content='website' />
        <meta name='og:title' content={links.title} />
        <meta name='og:url' content={window.location} />
        <meta name='og:description' content='akfgfragments.com' />
        <meta name='og:site_name' content='akfgfragments' />

        <meta name='twitter:image' content={links.img_uri} />
        <meta name='twitter:image:alt' content={links.title} />
        <meta name='twitter:card' content='website' />
        <meta name='twitter:site' content='@AkfgfragmentsEn' />
        <meta name='twitter:creator' content='@AkfgfragmentsEn' />
        <meta name='twitter:description' content='akfgfragments.com' />
        <meta name='twitter:title' content={links.title} />

        <meta charset='UTF-8' />
        <link rel='icon' type='image/ico' href='https://akfgfragments.com/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{links.title} – akfgfragments</title>
      </Helmet>
      <header><span>akfgfragments</span></header>
      <main className='mt-5'>
        <Title title={links.title} />
        <ArticleImage uri={links.img_uri} altText={links.title} />
        <LangBtnBlock links={links} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home