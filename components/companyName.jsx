export default function CompanyTitle() {

    return (


        <div className=" ">
            <div className="container mx-auto flex flex-row justify-between">
                <div className="basis-3/4">
                    <div className="">
                        <h1 className="m-1.5 mt-5 text-2xl inline-block">
                            Aamra Networks Limited &nbsp;&nbsp;
                            <span className="ltp" data-key="LastTrade">57</span>
                            <span >0.53</span>
                            <span>%</span>
                        </h1>
                        <div className="m-1.5">Trading code: AAMRANET</div>
                    </div>
                </div>
                <div className="basis-1/4">
                    <div className="text-center m-2 mb-3" >
                        <div>Day range</div>
                        <div>
                            {/* <label for="default-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default range</label> */}
                            <input id="default-range" type="range" min="0" max="100" className="w-full h-2 bg-gray-200 appearance-none cursor-pointer dark:bg-gray-700" />
                        </div>
                    </div>
                    <div className="text-center m-2 mb-3" >
                        <div>52 week range</div>
                        <div>
                            <input id="default-range" type="range" min="0" max="100" className="w-full h-2 bg-gray-200 appearance-none cursor-pointer dark:bg-gray-700" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};