import {useRouter} from "next/router";
import React from "react"
import { useState } from "react"
import {useSession,signIn,signOut} from 'next-auth/react'
import {toast,ToastContainer} from 'react-toastify'
import { useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
const Login=()=>{
    const router= useRouter()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const {data:session}=useSession();
    //console.log(session)
    useEffect(()=>{
        const googlesendData=async()=>{
            if(session){
            console.log(session.user.email)
            const data={email:session.user.email,password:'defaultpassword'}
            let res=await fetch('http://localhost:3000/api/login', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            let response=await res.json()
            console.log(response)
            if(response.success==true){
                localStorage.setItem('token',response.token)
                toast.success('You are successfully logged in!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setTimeout(()=>{
                    router.push('http://localhost:3000/company')
                },1000)
            }else{
                toast.error(response.error, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
            }
        }
        googlesendData()
        }
        )
        const googlesignIn=()=>{
            signIn('google',{callbackUrl:'http://localhost:3000/components/login'})
            
        }
    const handleChange=(e)=>{
        if(e.target.name=='email'){
            setEmail(e.target.value)
        }else if(e.target.name=='password'){
            setPassword(e.target.value)
        }
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const data={email:email,password:password}
        let res=await fetch('http://localhost:3000/api/login', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        let response=await res.json()
        setEmail('')
        setPassword('')
        if(response.success==true){
            localStorage.setItem('token',response.token)
            toast.success('You are successfully logged in!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(()=>{
                router.push('http://localhost:3000/company')
            },1000)
        }else{
            toast.error(response.error, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
       
    }
    return(
        <div className="bg-slate-200">
            <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
            <section className="h-screen">
            <div className="container mx-auto py-12  w-3/5 bg-white">
           
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                {/*<div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                    <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    className="w-full"
                    alt="Phone image"
                    />
                    </div>*/}
                <div className="md:w-8/12 lg:w-6/12">
                    <form onSubmit={handleSubmit} method="POST">
                    
                    <div className="mb-6">
                    <label htmlFor="email" className="sr-only">Email</label>
                        <input value={email} id="email" onChange={handleChange} name="email"
                        type="text" autoComplete="off"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Email address"
                        />
                    </div>

                    
                    <div className="mb-6">
                    <label htmlFor="password" className="sr-only">Password</label>
                        <input value={password} id="password" onChange={handleChange} name="password"
                        type="password"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                    >
                        Sign in
                    </button>
                    <div className="flex justify-between items-center mt-6">
                        
                        <a
                        href={'/signup'}
                        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                        >Don't have an account?</a>
                        <a
                        href="#!"
                        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out">
                        Forgot password?</a>
                        
                    </div>

                    

                    <div
                        className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                    >
                        <p className="text-center font-semibold mx-4 mb-0">OR</p>
                    </div>

                    <a
                        className="px-7 py-3 text-black font-medium text-sm leading-snug uppercase rounded shadow-md shadow-cyan-500/50 hover:shadow-lg hover:shadow-blue-500/50 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                        
                        onClick={googlesignIn}
                        role="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                    >
                       {/*} <!-- Google -->*/}
                       <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="36" height="36"
                        viewBox="0 0 48 48">
                        <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg>Log In with Google
                    </a>
                    <button onClick={()=>signOut()}>Signout</button>
                    </form>
                    
                </div>
                </div>
            </div>
            </section>
        </div>
    )
}


export default Login