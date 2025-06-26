import React from "react";
const UserCard=({user})=>{
return(
    <div style={{border:"2px solid blue", borderRadius:"8px", padding:"10px",margin:"5px"}}>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <p>{user.address.city}</p>
    </div>
)

}
export default UserCard;