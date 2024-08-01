import { PropsWithChildren } from "react"

export const SelectItem = ({ children, value }: PropsWithChildren & { value: string }) => {
  return (
    <span
      data-item="menu-item"
      data-value={value}
      className="text-sm whitespace-nowrap py-2 px-4 bg-brand-white w-full hover:bg-indigo-50 cursor-default flex items-center gap-2"
    >{children}</span>
  )
}
