import { PropsWithChildren } from "react"

export const TableColumn = ({ children, frs }: PropsWithChildren & { frs?: string }) => {
  return (
      <thead>
        <tr>
          {children}
        </tr>
      </thead>
  )
}