import { TbShoppingCartPlus } from 'react-icons/tb'

interface AddToCartIconProps {
  CartWidth?: string
}

export default function AddToCartIcon({ CartWidth }: AddToCartIconProps) {
  const WidthOfCartConfig: Record<string, string> = {
    default: 'text-[20px]'
  }

  const WidthOfCart: string =
    CartWidth && WidthOfCartConfig[CartWidth]
      ? WidthOfCartConfig[CartWidth]
      : WidthOfCartConfig.default

  return (
    <>
      <div className={`${WidthOfCart}`}>
        <TbShoppingCartPlus />
      </div>
    </>
  )
}
