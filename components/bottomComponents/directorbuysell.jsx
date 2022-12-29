
import data3 from './data3';
const DirectorBuySell = () => {
    const DisplayData = data3.map(
        (data) => {
            return (
                <tr className="even:bg-gray-200 odd:bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={data.id}>
                    <th scope="row" className="py-4 px-6 font-normal font-sans text-base text-gray-900 whitespace-nowrap dark:text-white" >
                        {data.date}
                    </th>
                    <td className="py-4 px-6 text-gray-700">
                        {data.spdi}
                    </td>
                    <td className="py-4 px-6 text-gray-700">
                        {data.type}
                    </td>
                    <td className="py-4 px-6 text-gray-700">
                        {data.qty}
                    </td>
                    <td className="py-4 px-6 text-gray-700">
                        {data.price}
                    </td>
                </tr>
            )
        }
    )
    return (

        <div className="max-w-min">
            <h1 className='text-2xl pb-5'>Director Buy & Sell</h1>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className='bg-gray-200'>
                        <th scope="col" className="py-3 px-6">
                            Date
                        </th>
                        <th scope="col" className="py-3 px-6">
                            SPONSOR/DIRECTOR
                        </th>
                        <th scope="col" className="py-3 px-6">
                            TYPE
                        </th>
                        <th scope="col" className="py-3 px-6">
                            QTY.
                        </th>
                        <th scope="col" className="py-3 px-6">
                            PRICE
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
        </div>

    )
}
export default DirectorBuySell