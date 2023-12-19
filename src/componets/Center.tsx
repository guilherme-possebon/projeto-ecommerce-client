interface CenterProp {
  children: React.ReactNode
}

export default function Center({ children }: CenterProp) {
  return (
    <>
      <div className="max-w-[800px] mx-auto px-[20px]">{children}</div>
    </>
  )
}
