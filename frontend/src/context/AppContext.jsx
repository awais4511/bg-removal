import axios from "axios";
import React, { createContext, useState } from "react";
import {useAuth, useClerk, useUser} from "@clerk/clerk-react";
import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom"


export const AppContext=createContext();
 
const AppContextProvider=(props)=>{

    const [credit,setCredit]=useState(false)
    const [image,setImage]=useState(false)
    const [resultImage,setResultImage]=useState(false)

    const {isSignedIn}=useUser()
    const {openSignIn}=useClerk();


    const backendurl=import.meta.env.VITE_BACKEND_URL;
    const navigate=useNavigate()
    const {getToken}=useAuth()

    const loadCreditData=async(req ,res)=>{
        try {
            const token=await getToken();
            const {data}=await axios.get(backendurl+"/api/user/credits",{headers:{token}})
            if(data.success){
                setCredit(data.credits)
                console.lod(data.credits)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    const removeBg=async(image)=>{
        try {
            if(!isSignedIn){
                return openSignIn()
            }
            setImage(image)
            setResultImage(false)

          navigate("/result")

          const token =await getToken();
          const formData=new FormData();
          image && formData.append('image',image)

          const {data}=await axios.post(backendurl+"/api/image/remove-bg",formData,{headers:{token}})

          if(data.success){
            setResultImage(data.resultImage)
            data.creditBalance && setCredit(data.creditBalance)
          }else{
            toast.error(data.message)
             data.creditBalance && setCredit(data.creditBalance)
             if(data.creditBalance === 0){
                navigate("/buycredit")
             }
          }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    const value={
        credit,setCredit,loadCreditData,backendurl,image,setImage,removeBg,resultImage,setResultImage
    }
   
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider


