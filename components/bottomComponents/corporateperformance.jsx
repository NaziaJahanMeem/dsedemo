
import data4 from './data4';
const CorporatePerformance = () => {
    const DisplayData = data4.map(
        (data) => {
            return (
                <tr className="even:bg-gray-200 odd:bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={data.id}>
                    <th scope="row" className="py-4 px-6 font-normal font-sans text-base text-gray-900 whitespace-nowrap dark:text-white" >
                        {data.fcol}
                    </th>
                    <td className="py-4 px-6 text-gray-700">
                        {data.scol}
                    </td>
                </tr>
            )
        }
    )
    return (

        <div className="overflow-x-auto relative max-w-screen-lg">
            <h1 className='text-2xl pb-5'>Corporate Performance at a glance</h1>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">

                <tbody>
                    {DisplayData}
                </tbody>
            </table>
        </div>

    )
}
export default CorporatePerformance