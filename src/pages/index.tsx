import Featured from '@/componets/Featured'
import Header from '@/componets/Header'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nome da empresa</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <Header />
        <Featured />
      </div>
    </>
  )
}
