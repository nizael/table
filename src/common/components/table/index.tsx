'use client'
import { TableRow } from "./components/TableRow"
import { TableColumn } from "./components/TableColumn"
import { TableCell } from "./components/TableCell"
import { TableBody } from "./components/TableBody"
import { TablePagination } from "./components/TablePagination"
import { ITable } from "./types"
import { useTableStore } from "./stores/useTableStore"
import { useEffect } from "react"

export const Table = ({ columns, rows }: ITable) => {
  const { pages, setAllRows, indexCurrentPage } = useTableStore()

  useEffect(() => {
    if (rows)
      setAllRows(rows)
  }, [rows])

  if (!pages.length) return <div>No transactions </div>
  return (
    <div className="flex flex-col gap-4" id="data-table">
      <div className="overflow-x-auto py-4">
      <table className="w-full min-w-fit">
          <TableColumn>
            {columns?.map(column => <TableCell key={column.field} fr={column.fr} isHeader justify={column.justify}>{column.label}</TableCell>)}
          </TableColumn>
          <TableBody>
            {pages[indexCurrentPage]?.map((row, index) => {
              return (
                <TableRow key={index}>
                  {columns?.map(column => {
                    return (
                      <TableCell key={column.field} justify={column.justify} fr={column.fr}>{row[column.field]}</TableCell>
                    )
                  })
                  }
                </TableRow>
              )
            })}
          </TableBody>
        </table>
      </div>
      <TablePagination />
    </div>
  )
}