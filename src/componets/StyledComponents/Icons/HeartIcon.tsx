import { CiHeart } from 'react-icons/ci'

interface HeartIconProps {
  HeartWidth?: string
}

export default function HeartIcon({ HeartWidth }: HeartIconProps) {
  const WidthOfHeartConfig: Record<string, string> = {
    XS: 'text-[10px]',
    S: 'text-[15px]',
    M: 'text-[20px]',
    L: 'text-[30px]',
    XL: 'text-[40px]'
  }

  const WidthOfHeart: string =
    HeartWidth && WidthOfHeartConfig[HeartWidth]
      ? WidthOfHeartConfig[HeartWidth]
      : WidthOfHeartConfig.m

  return (
    <>
      <div className={`${WidthOfHeart}`}>
        <CiHeart className="text-red-900 hover:bg-red-900" />
      </div>
    </>
  )
}
