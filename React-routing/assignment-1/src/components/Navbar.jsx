
import {Link} from 'react-router-dom';



function Navbar(){

    return(
        
        
        <nav style={{margin:"20px", padding:"20px"}}>
        <Link to='/' style={{ marginRight: "20px" }}>Home</Link>
        <Link to='/about'>About</Link>
        </nav>
        

    )
}
export default Navbar;