


export default function InfoTable() {
    return (
        <div className="overflow-x-auto relative">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="py-4 px-6">
                            Contact
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="py-4 px-6">
                            E-mail
                        </td>
                        <td className="py-4 px-6">
                            Website <span className="text-sky-400">aamranet.sharedept@aamra.com.bd</span>
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <td className="py-4 px-6">
                            Address
                        </td>
                        <td className="py-4 px-6">
                            Head Office
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
