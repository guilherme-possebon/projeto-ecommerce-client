import { TbShoppingCartPlus } from 'react-icons/tb'

interface AddToCartIconProps {
  CartWidth?: string
}

export default function AddToCartIcon({ CartWidth }: AddToCartIconProps) {
  const WidthOfCartConfig: Record<string, string> = {
    XS: 'text-[10px]',
    S: 'text-[15px]',
    M: 'text-[20px]',
    L: 'text-[30px]',
    XL: 'text-[40px]'
  }

  const WidthOfCart: string =
    CartWidth && WidthOfCartConfig[CartWidth]
      ? WidthOfCartConfig[CartWidth]
      : WidthOfCartConfig.m

  return (
    <>
      <div className={`${WidthOfCart}`}>
        <TbShoppingCartPlus />
      </div>
    </>
  )
}
