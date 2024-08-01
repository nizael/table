'use client'
import { useEffect } from 'react'

// import { ChevronLeftIcon, ChevronRightIcon } 
import { Select } from '../../select/Select'
import { SelectItem } from '../../select/SelectItem'

import { useTableStore } from '../stores/useTableStore'

export const TablePagination = () => {
  const rowForPageInit = 5
  const { pages, rowForPage, setAllRows, allRows, indexCurrentPage } = useTableStore()
  
  useEffect(() => {
    if (rowForPage) {
      setAllRows(allRows)
      useTableStore.setState({ indexCurrentPage: 0 })
    }
  }, [rowForPage])

  function nextPage() {
    if (indexCurrentPage >= pages.length) return
    useTableStore.setState({ indexCurrentPage: indexCurrentPage + 1 })
  }
  function prevPage() {
    if (indexCurrentPage === 0) return
    useTableStore.setState({ indexCurrentPage: indexCurrentPage - 1 })
  }

  if (allRows.length <= rowForPageInit) return null
  return (
    <div className="flex w-full items-center justify-between">
      <div className="w-fit ">
        <Select onChange={(value) => useTableStore.setState({ rowForPage: Number(value) })} label={`Rows ${rowForPageInit}`}>
          <SelectItem value={`${rowForPageInit}`}>Rows {rowForPageInit}</SelectItem>
          <SelectItem value="20">Rows 10</SelectItem>
          <SelectItem value="50">Rows 20</SelectItem>
        </Select>
      </div>

      <div className="flex items-center gap-4 grow justify-end">
        <p>Page {indexCurrentPage + 1} - {pages.length}</p>
        <div className="flex items-center gap-0.5 w-fit">
          <button onClick={prevPage} className="hover:bg-neutral-100 py-2 bg-neutral-50 w-10 flex items-center justify-center">{'<'}</button>
          <button onClick={nextPage} className="hover:bg-neutral-100 py-2 bg-neutral-50 w-10 flex items-center justify-center">{'>'}</button>
        </div>
      </div>
    </div>
  )
}
