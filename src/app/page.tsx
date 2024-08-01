import { Table  } from "@/common/components/table";
import { ITableColumn } from "@/common/components/table/types";

export default function Home() {
  const gridColumn: ITableColumn[] = [
    { field: 'date', label: 'Date', justify: 'start', fr: 100 },
    { field: 'id', label: 'ID' },
    { field: 'type', label: 'Type' },
    { field: 'amount', label: 'Amount' },
    { field: 'network', label: 'Network' },
    { field: 'status', label: 'Status' },
    { field: 'details', label: 'Details', fr: 96, justify: 'end' },
  ]

  const gridRow = [
    { date: '12/05/204', id: '1254-54', type: 'Deposit', amount: '$45.00', network: 'Ethereum', status: 'Completed', details: 'Details' },
    { date: '12/05/204', id: '1254-54', type: 'Deposit', amount: '$45.00', network: 'Ethereum', status: 'Completed', details: 'Details' },
    { date: '12/05/204', id: '1254-54', type: 'Deposit', amount: '$45.00', network: 'Ethereum', status: 'Completed', details: 'Details' },
    { date: '12/05/204', id: '1254-54', type: 'Deposit', amount: '$45.00', network: 'Ethereum', status: 'Completed', details: 'Details' },
    { date: '12/05/204', id: '1254-54', type: 'Deposit', amount: '$45.00', network: 'Ethereum', status: 'Completed', details: 'Details' },
    { date: '12/05/204', id: '1254-54', type: 'Deposit', amount: '$45.00', network: 'Ethereum', status: 'Completed', details: 'Details' },
    { date: '12/05/204', id: '1254-54', type: 'Deposit', amount: '$45.00', network: 'Ethereum', status: 'Completed', details: 'Details' },
    { date: '12/05/204', id: '1254-54', type: 'Deposit', amount: '$45.00', network: 'Ethereum', status: 'Completed', details: 'Details' },
    { date: '12/05/204', id: '1254-54', type: 'Deposit', amount: '$45.00', network: 'Ethereum', status: 'Completed', details: 'Details' },
    { date: '12/05/204', id: '1254-54', type: 'Deposit', amount: '$45.00', network: 'Ethereum', status: 'Completed', details: 'Details' },
    { date: '12/05/204', id: '1254-54', type: 'Deposit', amount: '$45.00', network: 'Ethereum', status: 'Completed', details: 'Details' },
  ]
  return (
    <main className="p-24">
      <Table
        columns={gridColumn}
        rows={gridRow}
      />
    </main>
  );
}
