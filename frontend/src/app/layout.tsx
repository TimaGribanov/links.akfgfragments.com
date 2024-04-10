import { lora } from '@/app/ui/fonts'
import '@/app/ui/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' data-bs-theme='dark'>
      <body className={lora.className}>{children}</body>
    </html>
  )
}
