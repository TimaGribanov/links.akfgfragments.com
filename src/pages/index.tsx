import { GetServerSideProps } from 'next'
import Head from 'next/head'

import pool from '@/lib/data'

import Title from '@/components/Title'
import ArticleImage from '@/components/ArticleImage'
import LangBtnBlock from '@/components/LangBtnBlock'
import Footer from '@/components/Footer'

type Links = {
  id: number,
  title: string,
  img_uri: string,
  en: string,
  de: string,
  idd: string,
  es: string,
  uk: string,
  ru: string,
  ja: string
}

export const getServerSideProps = (async (context) => {
  const id = context.query.id

  try {
    const db = await pool.getConnection()

    const query = 'SELECT * FROM links WHERE id = ?;'

    const [rows] = await db.execute(query, [id])
    db.release()

    const links = rows

    return { props: links }
  } catch (error) {
    return {
      notFound: true
    }
  }
}) satisfies GetServerSideProps<{ links: Links }>

const Home = (links: Links) => {
  const pageUrl = `https://links.akfgfragments.com/id=?${links.id}`
  return (
    <div className='container text-center w-75'>
      <Head>
        <meta property='og:title' content={links.title} />
        <meta property='og:description' content='akfgfragments' />
        <meta property='og:image' content={links.img_uri} />
        <meta property='og:url' content={pageUrl} />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='akfgfragments.com' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:title' content={links.title} />
        <meta property='twitter:description' content='akfgfragments' />
        <meta property='twitter:image' content={links.img_uri} />
        <meta property='twitter:creator' content='@AkfgfragmentsEn' />

        <title>{links.title} – akfgfragments</title>
      </Head>
      <div className='header'><span>akfgfragments</span></div>
      <div className='mt-5 main'>
        <Title title={links.title} />
        <ArticleImage uri={links.img_uri} altText={links.title} />
        <LangBtnBlock links={links} />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default Home