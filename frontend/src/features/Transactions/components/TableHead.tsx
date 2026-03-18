
const STYLE = {
    tableHeaed: 'font-[400] px-2 py-1 capitalize text-[#AEAEAE]',
}

const HEADERS = [
  {name: 'receiver', width: 'w-[240px]', align: 'text-start'},
  {name: 'category', width: 'w-[180px]', align: 'text-start'},
  {name: 'date', width: 'w-[140px]', align: 'text-start'},
  {name: 'value', width: 'w-[140px]', align: 'text-end'},
];

const TableHead = () => {
  return (
    <thead className="sticky top-0 z-10 bg-white ">
        <tr className="">
            {HEADERS.map((item) => {
            return (
            <th key={`${item.name}`} className={`${STYLE.tableHeaed} ${item.width} ${item.align}` }>{item.name}</th>
         )
        })} 
        </tr>
</thead>
  )
}

export default TableHead
