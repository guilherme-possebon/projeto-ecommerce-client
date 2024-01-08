import Featured from '@/componets/Featured'
import Header from '@/componets/Header'
import Head from 'next/head'
import { Product } from '../../models/Product'
import { mongooseConnect } from '../../lib/mongoose'
import NewProducts from '@/componets/NewProducts'

export interface HomeProps {
  product: Record<string, string>
}
export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Nome da empresa</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <Header />
        <Featured product={product} />
        <NewProducts />
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const featuredProductId = '6563c929b817b16d8ad51087'
  await mongooseConnect()
  const product: HomeProps | null = await Product.findById(featuredProductId)
  return {
    props: { product: JSON.parse(JSON.stringify(product)) }
  }
}
