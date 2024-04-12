import 'bootstrap/dist/css/bootstrap.min.css'
import { lora } from '@/ui/fonts'
import '@/styles.css'
import { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={lora.className}>
      <Component {...pageProps} />
    </main>
  )
}