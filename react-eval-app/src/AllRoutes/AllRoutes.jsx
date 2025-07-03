import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "../pages/Home"
import About from "../pages/About"
import Task from "../pages/Task"

function AllRoutes(){
    return(
        <>
       <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/about" element={<About/>} />
            <Route path="/task" element={<Task/>} />

           
        </Routes>
        </>
    )
}
export default AllRoutes;