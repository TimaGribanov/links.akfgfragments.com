import { useState, useEffect } from 'react'
import axios from 'axios'

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
