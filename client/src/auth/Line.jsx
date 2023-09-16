import React,{useEffect,useState} from 'react'
import liff from '@line/liff'

function Line() {

    const Line = () =>{
        useEffect(()=>{
    liff.init({liffId:'2000508817-l2074gpM'})
    .then(()=>{

    },[])

    const handleLogin = async()=>{
        try{
            const profile = await liff.getProfile()
            console.log(profile)
        }catch(err){
            console.log(err)
        }
    }
        })
    }
  return (
    <div>Line</div>
  )
}

export default Line