import Featured from '@/componets/Featured'
import Header from '@/componets/Header'
import Head from 'next/head'
import { Product } from '../../models/Product'
import type { ProductInterface } from '../../models/Product'
import { mongooseConnect } from '../../lib/mongoose'
import NewProducts from '@/componets/NewProducts'

export interface HomeProps {
  featuredProduct?: ProductInterface | null
  newProducts?: ProductInterface[] | undefined
  product?: ProductInterface | undefined
}
export default function Home({ featuredProduct, newProducts }: HomeProps) {
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
  const featuredProductId = '65aadf0e9fb48a0a632bcc4a'
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
