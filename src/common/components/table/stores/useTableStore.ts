import { create } from 'zustand'

import { IUseTableStore } from '../types'

export const useTableStore = create<IUseTableStore>((set, get) => ({
  allRows: [],
  pages: [],
  rowForPage: 5,
  countPages: 0,
  indexCurrentPage: 0,
  setAllRows: (rows) => {
    set({ allRows: rows })
    const setPages = get().setPages
    setPages()
  },
  setPages: () => {
    const rowForPage = get().rowForPage
    const rows = get().allRows
    if (rows.length && rows.length <= rowForPage) {
      set({ pages: [rows] })
    }
    if (rows.length && rows.length > rowForPage) {
      let count = 0
      const countPages = (rows.length % rowForPage) === 0 ? rows.length / rowForPage : Math.floor((rows.length / rowForPage)) + 1
      const pages = []
      for (let index = 0; index < countPages; index++) {
        const page = rows.slice(count, count + rowForPage)
        pages.push(page)
        count = count + rowForPage
      }
      set({ pages })
    }
  },
}))
