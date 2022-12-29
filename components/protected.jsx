import { useEffect } from "react"
import {useRouter} from "next/router";
function Protected(props){
    const {Component}=props
    const router=useRouter()
    
    useEffect(()=>{
      
        const token=localStorage.getItem('token')
        if(!token){
          router.push('http://localhost:3000/components/login')
          
        }
        
      },[])
    return(
        <div>
            <Component />
        </div>
    )
}
export default Protected