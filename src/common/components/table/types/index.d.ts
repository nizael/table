export interface ITableColumn {
  field: string
  label: string | JSX.Element
  fr?: number
  justify?: 'start' | 'center' | 'end'
  important?: boolean
}
export interface ITable {
  columns?: ITableColumn[]
  rows?: ITableRow[]
}

export interface ITableRow {
  [key: string]: string | JSX.Element
}

export interface IUseTableStore {
  allRows: ITableRow[]
  pages: (ITableRow[])[]
  rowForPage: number
  countPages: number
  indexCurrentPage: number
  setAllRows(rows: ITableRow[]): void
  setPages(): void
}
