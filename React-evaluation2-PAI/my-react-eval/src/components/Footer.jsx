import { Link } from "react-router-dom";

function Footer(){
    return(
       <footer style={{
         position:"fixed",
        bottom:'0',
        left:'0',
        right:'0',
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:"20px",
        borderBottom:"1px solid blue",
        width:"100%",
       }}>
       
        <Link to='/contackus' style={{marginRight:"40px"}}>CONTACT US</Link>
        <Link to='/about' style={{marginRight:"40px"}}>ABOUT</Link>
        <Link to='/facebook'>FACEBOOK</Link>
       </footer>
    )
}
export default Footer;