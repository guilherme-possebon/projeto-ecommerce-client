import type { HomeProps } from '@/pages'
import Center from './StyledComponents/Center'
import ProductBox from './ProductBox'

export default function NewProducts({ newProducts }: HomeProps) {
  return (
    <>
      <Center>
        <div className="grid grid-cols-NewProductsGrid gap-5 pt-5">
          {newProducts &&
            newProducts.length > 0 &&
            newProducts.map((product) => (
              <ProductBox product={product} key={product._id} />
            ))}
        </div>
      </Center>
    </>
  )
}
