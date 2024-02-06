import Image from 'next/image'
import type { ProductInterface } from '../../../models/Product'
import AddToCartIcon from './Icons/AddToCartIcon'
import PrimaryBtn from './PrimaryBtn'

export default function ProductBox({ product }: { product: ProductInterface }) {
  return (
    <>
      <div className="bg-white p-5">
        <div key={product._id}>
          <Image
            width={208}
            height={208}
            alt="Image of the product"
            src={product.productUrls[0]}
            className="object-contain h-52 w-52"
          />
          <div className="flex flex-col">
            <p>{product.title}</p>
            <div className="flex justify-between">
              <p className="font-bold text-2xl">R${product.price}</p>
              <PrimaryBtn color="outline" hover="BestWithTransparent">
                <AddToCartIcon />
              </PrimaryBtn>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
// TODO Possivelmente adicionar futuramente o botão de favorito "<3"
// import HeartIcon from './Icons/Hearticon'
// import PrimaryBtn from './PrimaryBtn'
// export default function ProductBox({ product }: { product: ProductInterface }) {
//   return (
//     <>
//       <div className="bg-white p-5 relative">
//         <div key={product._id} className="flex justify-center">
//           <div className="absolute top-2 right-2">
//             <PrimaryBtn color="fullTransparent">
//               <HeartIcon />
//             </PrimaryBtn>
//           </div>
//           <Image
//             width={160}
//             height={160}
//             alt="Image of the product"
//             src={product.productUrls[0]}
//             className="object-contain h-40 w-40"
//           />
//         </div>

//         <div className="flex justify-between items-center">
//           <h2 className="font-normal text-[1rem]">{product.title}</h2>
//           <p className="text-sm">R${product.price}</p>
//         </div>
//       </div>
//     </>
//   )
// }
