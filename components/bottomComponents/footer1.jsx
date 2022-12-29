import Image from 'next/image'
import playstore from '../../public/playstore.webp'
import headset from '../../public/user-headset.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer1=()=>{
    return(
        <div className="container mx-auto py-10 flex flex-row space-x-14 ">
            
            <div className='w-2/4'>
                <div className='flex flex row'>
                    <Image
                    src={headset}
                    alt="/"
                    height={60}
                    />
                    <div>
                    <h1 className='text-white text-xs'>AmarStock Hotline</h1>
                    <h1 className='text-white text-2xl'>01894615170</h1>
                    <h1 className='text-gray-200 text-sm antialiased font-base'>10 AM - 5 PM Weekdays</h1>
                    </div>
                </div>
                <div>
                    <h1 className='text-sm text-gray-300 font-sans drop-shadow-lg font-base py-4'>
                    Attention Investor, <br />
                    Investment in securities market are subject to market risks,
                     read all the related documents carefully before investing.
                    </h1>
                </div>
                <div className='flex flex-row'>
                    <Image
                    src={playstore}
                    alt="/"
                    width="180"
                    />
                    <div className='flex flex-row pt-5 pl-10'>
                        <div className='box-border h-7 w-7 border-2 '>
                        <i className="fa-brands fa-facebook text-[1rem] text-white box-content p-1"></i>
                        </div>
                        <div className='box-border h-7 w-7 border-2'>
                        <i className="fa-brands fa-youtube text-[1rem] text-white box-content p-1"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 divide-y space-y-5'>
                <div>
                    <h1 className='text-gray-300 font-semibold'>UPDATES</h1>
                    <div className='flex flex-row space-x-32 text-white'>
                    <a href="#" className="no-underline hover:underline ">Training</a>
                    <a href="#" className="no-underline hover:underline ">Bug Support</a>
                    <a href="#" className="no-underline hover:underline ">Suggestions</a>
                    <a href="#" className="no-underline hover:underline ">Report New Features</a>
                    </div>
                </div>
                <div>
                    <h1 className='text-gray-300 font-semibold'>ABOUT AMARSTOCK</h1>
                    <div className='flex flex-row space-x-32 text-white'>
                    <a href="#" className="no-underline hover:underline ">About us</a>
                    <a href="#" className="no-underline hover:underline ">Partners</a>
                    <a href="#" className="no-underline hover:underline ">Terms of Use</a>
                    <a href="#" className="no-underline hover:underline ">Privacy Policy</a>
                    
                    </div>
                    <div className='flex flex-row space-x-32 text-white'>
                    <a href="#" className="no-underline hover:underline ">Refund Policy</a>
                    <a href="#" className="no-underline hover:underline ">Blog</a>
                    <a href="#" className="no-underline hover:underline ">Data FAQ</a>
                    
                    
                    </div>
                </div>
                <div>
                    <h1 className='text-gray-300 font-semibold'>CONTACT US</h1>
                    <div className='flex flex-row space-x-32 text-white'>
                    <a href="#" className="no-underline hover:underline ">Email : support@amarstock.com</a>
                    <a href="#" className="no-underline hover:underline ">Messenger : @amarstockfb</a>
                    <a href="#" className="no-underline hover:underline ">Our Address</a>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Footer1