export interface PrimaryBtnProps {
  children: React.ReactNode
  size?: string
  color?: string
  hover?: string
}

export default function PrimaryBtn({
  children,
  size,
  color,
  hover
}: PrimaryBtnProps) {
  const hoverConfig: Record<string, string> = {
    default: '',
    BestWithTransparent:
      'hover:bg-[#4c1d95] hover:text-white hover:border-[#4c1d95] ease-in-out duration-200',
    BestWithDefault:
      'hover:bg-[#32155d] hover:text-white hover:border-[#32155d] ease-in-out duration-200'
  }
  const sizeConfig: Record<string, string> = {
    L: 'text-[1.2rem] py-[10px] px-[20px]',
    SCart: 'p-2'
  }
  const colorConfig: Record<string, string> = {
    default: `bg-primary text-white`,
    white: 'bg-white text-black',
    transparent: 'bg-transparent text-white border divide-solid border-white',
    fullTransparent: 'bg-transparent text-white',
    outline: `bg-transparent border divide-solid border-primary text-primary`
  }

  const sizeClassName: string =
    size && sizeConfig[size] ? sizeConfig[size] : 'py-[5px] px-[15px]'

  const colorClassName: string =
    color && colorConfig[color] ? colorConfig[color] : colorConfig.default

  const hoverClassName: string =
    hover && hoverConfig[hover] ? hoverConfig[hover] : hoverConfig.default
  return (
    <>
      <button
        className={`rounded-md ${colorClassName} ${sizeClassName} ${hoverClassName}`}
      >
        {children}
      </button>
    </>
  )
}
