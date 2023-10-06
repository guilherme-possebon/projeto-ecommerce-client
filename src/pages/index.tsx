import { Inter } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Nome da empresa</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <h1>Index</h1>
      </div>
    </>
  )
}
