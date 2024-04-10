import { useState, useEffect } from 'react'
import axios from 'axios'
import Helmet from 'react-helmet'

import './App.css'

import Title from './components/Title'
import Image from './components/Image'
import LangBtnBlock from './components/LangBtnBlock'
import Footer from './components/Footer'

const App = () => {
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
        <meta property='og:type' content='website' />
        <meta property='og:title' content={links.title} />
        <meta property='og:url' content={window.location} />
        <meta property='og:description' content='akfgfragments.com' />
        <meta property='og:image' content={links.img_uri} />
        <meta property='og:image:alt' content={links.title} />
        <meta property='og:site_name' content='akfgfragments' />
        
        <meta property='twitter:card' content='website' />
        <meta property='twitter:site' content='@AkfgfragmentsEn' />
        <meta property='twitter:creator' content='@AkfgfragmentsEn' />
        <meta property='twitter:description' content='akfgfragments.com' />
        <meta property='twitter:title' content={links.title} />
        <meta property='twitter:image' content={links.img_uri} />
        <meta property='twitter:image:alt' content={links.title} />
      </Helmet>
      <header><span>akfgfragments</span></header>
      <main className='mt-5'>
        <Title title={links.title} />
        <Image uri={links.img_uri} altText={links.title} />
        <LangBtnBlock links={links} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
