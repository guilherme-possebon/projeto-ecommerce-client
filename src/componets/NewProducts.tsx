import type { HomeProps } from '@/pages'

export default function NewProducts({ newProducts }: HomeProps) {
  return (
    <>
      <div className="grid grid-cols-NewProductsGrid">
        {newProducts &&
          newProducts.length > 0 &&
          newProducts.map((product) => (
            <div key={product._id}>{product.title}</div>
          ))}
      </div>
    </>
  )
}
