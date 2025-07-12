import { Link } from "react-router-dom"
function Navbar(){
    return(

      <nav>
        <Link to='/' style={{marginRight:"40px"}}>Dashboard</Link>
        <Link to='/ProjectDetails' style={{marginRight:"40px"}}>Project Details</Link>
        <Link to='/AddProject' style={{marginRight:"40px"}}>Add Project</Link>
        <Link to='/EditProject' style={{marginRight:"40px"}}>Edit Project</Link>
        <Link to='/LogIn' >Log In</Link>
      </nav>
    )
}
export default Navbar;