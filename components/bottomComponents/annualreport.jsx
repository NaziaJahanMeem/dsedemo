import { FaDownload } from "react-icons/fa"
let data1 = [
    {
        id: 1,
        value: 'aamranet-2017-2018-annual'
    },
    {
        id: 2,
        value: 'aamranet-2017-2018-annual'
    },


]
const AnnualReport = () => {
    const DisplayData = data1.map(
        (data) => {
            return (
                <tr className=" even:bg-gray-200 odd:bg-white border border-slate-300" key={data.id}>
                    <th scope="row" className="w-4/5 py-4 px-6 font-normal font-sans text-base text-gray-900 whitespace-nowrap dark:text-white" >
                        {data.value}
                    </th>
                    <td className="py-2 text-gray-700 flex flex-row">
                        <FaDownload />
                        <h1 className="px-2">download</h1>
                    </td>
                </tr>
            )
        }
    )
    return (
        <div className="overflow-x-auto relative">
            <table className="text-sm text-left text-gray-500 dark:text-gray-400">
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
        </div>
    )
}
export default AnnualReport