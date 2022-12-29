
import data1 from './data1';
const TableContents2=()=>{
    const DisplayData=data1.map(
        (data)=>{
            return(
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={data.id}>
                <th scope="row" className="py-4 px-6 font-normal font-sans text-base text-gray-900 whitespace-nowrap dark:text-white" >
                    {data.first}
                </th>
                <td className="py-4 px-6 text-gray-700">
                    {data.year1}
                </td>
                <td className="py-4 px-6 text-gray-700">
                    {data.year2}
                </td>
                <td className="py-4 px-6 text-gray-700">
                    {data.year3}
                </td>
                <td className="py-4 px-6 text-gray-700">
                    {data.year4}
                </td>
            </tr>
            )
        }
    )
    return(
            
        <div className="overflow-x-auto relative">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6 w-2/4">
                            
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Year1
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Year2
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Year3
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Year4
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
export default TableContents2