import { PropsWithChildren } from "react"

export const TableCell = ({ children, justify, isHeader, fr }: PropsWithChildren & { justify?: 'start' | 'center' | 'end', isHeader?: boolean, fr?: number }) => {
  const width = fr && `${fr}px`
  return (
    <td style={{ width: width}} className={`${isHeader ?? 'group-hover:first:pl-2.5 group-hover:last:pr-2.5 ' } transaction-all duration-300 `}>
      <div className={`${isHeader ? 'text-dynamic-tertiary' : 'text-dynamic-primary '} flex items-center justify-center py-6 px-1 text-sm`} style={{ justifyContent: justify }}>
        {children}
      </div>
    </td>
  )
}