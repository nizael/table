import { PropsWithChildren } from "react"

export const TableRow = ({ children }: PropsWithChildren) => {
  return (
    <tr className="hover:shadow-md hover:scale-x-[99%] even: rounded-lg md:group transaction-all duration-300">
      {children}
    </tr>
  )
}