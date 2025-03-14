import { GetServerSideProps } from 'next'
import Head from 'next/head'

import pool from '@/lib/data'

import Title from '@/components/Title'
import ArticleImage from '@/components/ArticleImage'
import LangBtnBlock from '@/components/LangBtnBlock'
import Footer from '@/components/Footer'

export type Links = {
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

  if (id === undefined || id === '0')
    return {
      props: {
        id: 0,
        title: 'Welcome to akfgfragments',
        img_uri: 'https://akfgfragments.com/wp-content/uploads/2023/11/image-25.png',
        en: '',
        de: '',
        idd: '',
        es: '',
        uk: '',
        ru: '',
        ja: ''
      }
    }

  try {
    const db = await pool.getConnection()

    const query = 'SELECT * FROM links WHERE id = ?;'

    const [rows] = await db.execute(query, [id])
    await db.release()

    const parsedTitle = rows.title.replace(`\\'`, `'`)

    const links = {
      ...rows,
      title: parsedTitle
    }

    return { props: links }
  } catch (error) {
    return {
      notFound: true
    }
  }
}) satisfies GetServerSideProps<{ links: Links }>


const Home = (links: Links) => {
  const metaTitle = `${links.title} – akfgfragments`
  const pageUrl = links.id === 0
    ? 'https://links.akfgfragments.com'
    : `https://links.akfgfragments.com/?id=${links.id}`

  return (
    <div className='container text-center w-75'>
      <Head>
        <meta property='og:title' content={metaTitle} />
        <meta property='og:description' content='Your ultimate guide to Asian Kung-Fu Generation world' />
        <meta property='og:image' content={links.img_uri} />
        <meta property='og:image:alt' content={metaTitle} />
        <meta property='og:url' content={pageUrl} />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='akfgfragments.com' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={metaTitle} />
        <meta name='twitter:description' content='Your ultimate guide to Asian Kung-Fu Generation world' />
        <meta name='twitter:image' content={links.img_uri} />
        <meta name='twitter:creator' content='@AkfgfragmentsEn' />

        <title>{metaTitle}</title>
        <link rel='icon' type='image/ico' href='https://akfgfragments.com/favicon.ico' />
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