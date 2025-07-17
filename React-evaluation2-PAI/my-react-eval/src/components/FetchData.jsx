import { useState,useEffect } from "react";

function FetchData(){
const [data,setData]=useState([])
 const[page,setPage]=useState(1)

async function showdata() {
    try{
let response=await fetch("https://fakestoreapi.com/products") // used fakestore api as a demo api

let result=await response.json()
  setData(result);
    }
    catch(error)
    {
        console.log(error)
    }
}

useEffect(()=>{
showdata()
},[])
    return(
        <>
        <h2 style={{padding:"40px"}}>Fetch Data (page{page})</h2>
  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr", gap:"20px",padding:"20px",margin:"20px",border:'1px solid black'}}>

{data.map((product)=>
<div key={product.id} style={{border:"2px solid blue",padding:"20px"}}>
    <img src={product.image}
    
    style={{height:'100px',width:"200px",objectFit:'contain'}}/>
    
  <p>ID:{product.id}</p>
 <p>Title:{product.title}</p>
 <p>Price:{product.price}</p>
 
</div>
)}


  </div>

    <button onClick={()=> setPage(prev=>prev-1)} disabled={page===1}>Prev</button>
         <button onClick={()=> setPage(prev=>prev+1)} >Next</button>
        </>
    )
}
export default FetchData;