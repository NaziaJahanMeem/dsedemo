import { FaQuestionCircle } from "react-icons/fa";

export default function Card(props) {
    // console.log(props.cardTitle);

    return (
        <div className=" inline-block w-60 p-6 bg-cardcolor border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 align-middle">
            {/* <div className="flex flex-col items-start"> */}
            <FaQuestionCircle className="relative -top-4 -right-48" fill="gray" />
            <div className="text-center">
                <h1 className="font-normal text-gray-800">{props.name}</h1>
                <h1 className="text-3xl">{props.value}</h1>
            </div>
            {/* </div> */}
        </div>
    );
}