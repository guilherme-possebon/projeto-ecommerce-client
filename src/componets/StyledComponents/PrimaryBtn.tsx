export interface PrimaryBtnProps {
  children: React.ReactNode
  size?: string
  color?: string
}

export default function PrimaryBtn({ children, size, color }: PrimaryBtnProps) {
  const sizeConfig: Record<string, string> = {
    L: 'text-[1.2rem] py-[10px] px-[20px]',
    SCart: 'p-2'
  }
  const colorConfig: Record<string, string> = {
    default: 'bg-[#5542F6] text-white',
    white: 'bg-white text-black',
    transparent: 'bg-transparent text-white border divide-solid border-white',
    fullTransparent: 'bg-transparent text-white',
    outline:
      'bg-transparent border divide-solid border-[#5542F6] text-[#5542F6]'
  }

  const sizeClassName: string =
    size && sizeConfig[size] ? sizeConfig[size] : 'py-[5px] px-[15px]'

  const colorClassName: string =
    color && colorConfig[color] ? colorConfig[color] : colorConfig.default

  return (
    <>
      <button className={`rounded-md ${colorClassName} ${sizeClassName}`}>
        {children}
      </button>
    </>
  )
}
