import React,{useState,useEffect} from "react";

function Stopwatch(){
 const[time,setTime]=useState(0)
 const[running,setRunning]=useState(false)

 useEffect(()=>{
  let interval;
  if(running){
    interval=setInterval(()=>{
        setTime(prev=>prev+1)
    },1000)
  }
  return ()=>clearInterval(interval)
 },[running])
 return(
    <>
    <div>
        <h1>Time:{time}s</h1>
        <button onClick={()=>setRunning(true)} style={{color:"green"}}>Start</button>
        <button onClick={()=>setRunning(false)} style={{color:"red"}}>Stop</button>
        <button onClick={()=>setTime(0)} style={{color:"blue"}}>Reset</button>
    </div>

    </>
 )
}
export default Stopwatch;