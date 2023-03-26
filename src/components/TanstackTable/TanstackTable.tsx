import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { ShowResponseType } from '@/pages/ReactTable';

export type TanstackTableProps = {
  data: ShowResponseType;
}

const columnHelper = createColumnHelper<ShowResponseType>();
// const columns = [
//   columnHelper.accessor('id', {

//   })
// ]

const TanstackTable = ({data}: TanstackTableProps) => {



  return (
    <div>TanstackTable</div>
  )
}

export default TanstackTable