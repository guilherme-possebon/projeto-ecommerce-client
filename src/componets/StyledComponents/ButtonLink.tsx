import Link from 'next/link'
import type { PrimaryBtnProps } from './PrimaryBtn'

interface ButtonLinkProps {
  href: string
}

export default function ButtonLink({
  children,
  size,
  color,
  href
}: PrimaryBtnProps & ButtonLinkProps) {
  const sizeConfig: Record<string, string> = {
    L: 'text-[1.2rem] py-[10px] px-[20px]',
    SCart: 'p-2'
  }
  const colorConfig: Record<string, string> = {
    default: 'bg-[#5542F6] text-white',
    white: 'bg-white text-black',
    transparent: 'bg-transparent text-white border divide-solid border-white'
  }

  const sizeClassName: string =
    size && sizeConfig[size] ? sizeConfig[size] : 'py-[5px] px-[15px]'

  const colorClassName: string =
    color && colorConfig[color] ? colorConfig[color] : colorConfig.default

  return (
    <>
      <Link
        href={href}
        className={`rounded-md ${colorClassName} ${sizeClassName}`}
      >
        {children}
      </Link>
    </>
  )
}
