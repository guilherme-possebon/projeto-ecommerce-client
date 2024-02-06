import Link from 'next/link'
import type { PrimaryBtnProps } from './PrimaryBtn'

interface ButtonLinkProps {
  href: string
}

export default function ButtonLink({
  children,
  size,
  color,
  href,
  hover
}: PrimaryBtnProps & ButtonLinkProps) {
  const hoverConfig: Record<string, string> = {
    default: '',
    BestWithBlack:
      'hover:bg-white hover:text-black hover:border-black ease-in-out duration-200'
  }

  const sizeConfig: Record<string, string> = {
    default: 'py-[5px] px-[15px]',
    L: 'text-[1.2rem] py-[10px] px-[20px]',
    SCart: 'p-2'
  }
  const colorConfig: Record<string, string> = {
    default: `bg-primary text-white`,
    black: 'bg-[#222] text-white border-white border',
    white: 'bg-white text-black',
    transparent: 'bg-transparent text-white border divide-solid border-white',
    fullTransparent: 'bg-transparent text-white'
  }

  const sizeClassName: string =
    size && sizeConfig[size] ? sizeConfig[size] : sizeConfig.default

  const colorClassName: string =
    color && colorConfig[color] ? colorConfig[color] : colorConfig.default

  const hoverClassName: string =
    hover && hoverConfig[hover] ? hoverConfig[hover] : hoverConfig.default
  return (
    <>
      <Link
        href={href}
        className={`rounded-md ${colorClassName} ${sizeClassName} ${hoverClassName}  `}
      >
        {children}
      </Link>
    </>
  )
}
