export interface ChildrenProp {
  children: React.ReactNode
}

export default function Center({ children }: ChildrenProp) {
  return (
    <>
      <div className="max-w-[800px] mx-auto px-[20px]">{children}</div>
    </>
  )
}
