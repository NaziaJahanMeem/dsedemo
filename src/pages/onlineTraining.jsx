import { useEffect } from "react"
import {useRouter} from "next/router"
const OnlineTraining=()=>{
    const router=useRouter()
    useEffect(()=>{
        const token=localStorage.getItem('token')
        if(!token){
          router.push('http://localhost:3000/login')
          
        }
        
      },[])
    return(
        <div className="flex justify-center items-center">
            <h1>Online Training</h1>
        </div>
    )
}
export default OnlineTraining