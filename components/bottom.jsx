import CompanyDetails from "./bottomComponents/companydetails"
import CorporateAction from "./bottomComponents/corporateAction"
import ShareholdingPattern from "./bottomComponents/shareholdingpattern"
import Announcement from "./bottomComponents/announcement"
import DirectorBuySell from "./bottomComponents/directorbuysell"
import CorporatePerformance from "./bottomComponents/corporateperformance"
// -------------
import Pagination from "./bottomComponents/pagination"
import Report from "./bottomComponents/report"
import Footer1 from "./bottomComponents/footer1"
import Footer2 from "./bottomComponents/footer2"
//-----------------------------
export default function Bottom() {
    return (
        <div className="mt-4">
            <div className="bg-gray-100 f-fit">
                <CompanyDetails />
            </div>
            <div className=" bg-cardcolor f-fit">
                <CorporateAction />
            </div>
            <div className="grid grid-flow-col px-44 py-5">
                <ShareholdingPattern />
                <Announcement />
            </div>
            <div className="grid grid-flow-col px-44 py-5 h-fit bg-directorBandSell">
                <DirectorBuySell />
                <CorporatePerformance />
            </div>
            <div className="bg-report f-fit">
                <Report />
            </div>
            <div className="">
                <Pagination />
            </div>
            <div className=" bg-searchbar">
                <Footer1 />
            </div>
            <div className="bg-zinc-800">
                <Footer2 />
            </div>
        </div>
    );
};