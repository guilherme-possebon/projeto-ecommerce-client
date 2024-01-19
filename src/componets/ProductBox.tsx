import Image from 'next/image'
import type { ProductInterface } from '../../models/Product'

export default function ProductBox({ product }: { product: ProductInterface }) {
  return (
    <>
      <div className="bg-white p-5">
        <div key={product._id}>
          {product.title}
          <Image
            width={208}
            height={208}
            alt="Image of the product"
            src={product.productUrls[0]}
            className="object-contain h-52 w-52"
          />
          <div className="flex justify-end">
            <p>R${product.price}</p>
          </div>
        </div>
      </div>
    </>
  )
}
