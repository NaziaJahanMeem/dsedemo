import { data } from "autoprefixer";
import { useEffect,useState } from "react";

const Announcement=()=>{
    const [datas,setdatas]= useState([])
    useEffect(()=> {
   
        let res = 3;
         let endpoint = "http://localhost:3000/api";
         fetch(endpoint, {
           method: "GET",
           headers: { "Content-Type": "application/json; charset=UTF-8" },
         })
           .then((Response) => Response.json())
           .then((data) => {
             
             setdatas(data.mans)
           })
           .catch((error) => {
             console.log(error);
           });
          //console.log(this.state);  /////dosen't get the updated value.
          //console.log("res....", res);
       })
    return(
        <div className="">
        
        <div className="overflow-y-auto h-96 scrollbar-thumb-gray-900 scrollbar-track-gray-100 font-normal">
            <div className="h-96">
                <h1 className="text-3xl font-normal">News</h1>
                <h3 className="text-sm text-slate-600">Stay tuned to the latest developments and happenings in the company.</h3>
                <div className="pt-5">
                    <h1 className="text-xl  text-slate-700">Resumption after record date</h1>
                    <h2 className="text-sm text-slate-700 py-2">Trading of the shares of the Company will resume on 21.11.2022 after record date.</h2>
                    <h3 className="text-sm text-gray-400">November 20, 2022</h3>
                </div>
                <div className="pt-3">
                    <h1 className="text-xl  text-slate-700">Suspension for Record date</h1>
                    <h2 className="text-sm text-slate-700 py-2">Trading of the shares of the Company will remain suspended on record date i.e., 20.11.2022</h2>
                    <h3 className="text-sm text-gray-400">November 17, 2022</h3>
                </div>
                <div className="pt-3">
                    <h1 className="text-xl  text-slate-700">Spot News</h1>
                    <h2 className="text-sm text-slate-700 py-2">Trading of the shares of the company will be allowed only in the Spot Market and Block transaction will also be settled as per spot settlement cycle with cum benefit from 16.11.2022 to 17.11.2022. Trading of the shares of the Company will remain suspended on record date i.e., 20.11.2022.</h2>
                    <h3 className="text-sm text-gray-400">November 15, 2022</h3>
                </div>
                <div className="pt-3">
                    <h1 className="text-xl  text-slate-700">Q1 Financials</h1>
                    <h2 className="text-sm text-slate-700 py-2">(Continuation news of AAMRANET): Reasons for significant deviation: EPS has been increased due to 36% growth of revenue and NOCFPS has been increased due to cash received from customers and others increased significantly compared to the same period in the previous year. (end)</h2>
                    <h3 className="text-sm text-gray-400">November 13, 2022</h3>
                </div>
            </div>
        </div>
        
        {/*}
        <div className="overflow-y-auto h-96 scrollbar-thumb-gray-900 scrollbar-track-gray-100 font-normal">
            <div className="h-96">
                <h1 className="text-3xl font-normal">News</h1>
                <h3 className="text-sm text-slate-600">Stay tuned to the latest developments and happenings in the company.</h3>
                {
                datas.map((item)=>(    
                <div className="pt-5">
                    <h1 className="text-xl  text-slate-700">Resumption after record date</h1>
                    <h2 className="text-sm text-slate-700 py-2">{item.an}</h2>
                    <h3 className="text-sm text-gray-400">{item.date2}</h3>
                </div>
               ))}
            </div>
                </div> */}      
        </div>
    )
}
export default Announcement