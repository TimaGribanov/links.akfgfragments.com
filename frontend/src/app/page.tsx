import { Metadata, ResolvingMetadata } from 'next'
import Title from '@/app/components/Title'
import ArticleImage from '@/app/components/ArticleImage'
import LangBtnBlock from '@/app/components/LangBtnBlock'
import Footer from '@/app/components/Footer'

const getCurrentHost =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3006'
    : 'https://links.akfgfragments.com'

const getData = async (params: {}) => {
  const id = params.id

  const response = await fetch(`${getCurrentHost}/api/links?id=${id}`)

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const jsonResponse = await response.json()

  return jsonResponse[0]
}

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const links = await getData(searchParams)

  const title = links.title + ' – akfgfragments'

  return {
    title: title,
    openGraph: {
      title: title,
      description: links.title,
      url: `https://links.akfgfragments.com?id=${searchParams.id}`,
      siteName: 'akfgfragments.com',
      images: [
        {
          url: links.img_uri,
          alt: links.title
        }
      ],
      locale: 'en_GB',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: links.title,
      creator: '@AkfgfragmentsEn',
      images: [ links.img_uri]
    }
  }
}

const Home = async ({ params, searchParams }: Props) => {
  const links = await getData(searchParams)

  return (
    <div className='container text-center w-75'>
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