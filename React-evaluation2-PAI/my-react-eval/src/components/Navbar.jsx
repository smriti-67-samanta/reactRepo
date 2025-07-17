import {Link} from "react-router-dom"
function Navbar(){
    return(
       <nav style={{
        position:"fixed",
        top:'0',
        left:'0',
        right:'0',
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:"20px",
        borderBottom:"1px solid blue",
        width:"100%",
        }}>
       <Link to='/' style={{marginRight:"40px"}}>HOME</Link>
       <Link to='/fetchdata' style={{marginRight:"40px"}}>FETCH DATA</Link>
       <Link to='/coursedetails' >COURSE DETAILS</Link>
       </nav>
    )
}
export default Navbar;





