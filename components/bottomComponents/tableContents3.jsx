import data2 from './data2';
const TableContents3 = () => {
    const DisplayData = data2.map(
        (data) => {
            return (
                <tr className="even:bg-gray-200 odd:bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={data.id}>
                    <th scope="row" className="py-4 px-6 font-normal font-sans text-base text-gray-900 whitespace-nowrap dark:text-white" >
                        {data.year}
                    </th>
                    <td className="py-4 px-6 text-gray-700">
                        {data.cash_dividend}
                    </td>
                    <td className="py-4 px-6 text-gray-700">
                        {data.stock_dividend}
                    </td>
                    <td className="py-4 px-6 text-gray-700">
                        {data.eps}
                    </td>
                    <td className="py-4 px-6 text-gray-700">
                        {data.nav}
                    </td>
                    <td className="py-4 px-6 text-gray-700">
                        {data.record_date}
                    </td>
                </tr>
            )
        }
    )
    return (
        <div className="overflow-x-auto relative">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className='bg-gray-200'>
                        <th scope="col" className="py-3 px-6 w-1/4">Year</th>
                        <th scope="col" className="py-3 px-6 w-1/4">Cash Dividen</th>
                        <th scope="col" className="py-3 px-6">Stock Dividend</th>
                        <th scope="col" className="py-3 px-6">EPS</th>
                        <th scope="col" className="py-3 px-6">NAV</th>
                        <th scope="col" className="py-3 px-6 w-1/6">Record Date</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
        </div>

    )
}
export default TableContents3