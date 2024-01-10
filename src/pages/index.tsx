import Featured from '@/componets/Featured'
import Header from '@/componets/Header'
import Head from 'next/head'
import { Product } from '../../models/Product'
import { mongooseConnect } from '../../lib/mongoose'
import NewProducts from '@/componets/NewProducts'

export interface HomeProps {
  featuredProduct?: Record<string, string>
  newProducts?: Record<string, string>
}
export default function Home({ featuredProduct, newProducts }: HomeProps) {
  console.log(newProducts, 11)
  return (
    <>
      <Head>
        <title>Nome da empresa</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <Header />
        <Featured featuredProduct={featuredProduct} />
        <NewProducts newProducts={newProducts} />
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const featuredProductId = '6563c929b817b16d8ad51087'
  await mongooseConnect()
  const featuredProduct: HomeProps | null =
    await Product.findById(featuredProductId)
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10
  })
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts))
    }
  }
}
