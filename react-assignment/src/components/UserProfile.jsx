import React,{useState,useEffect} from "react";
import UserCard from "./UserCard";

function UserProfile(){

    const[users,setUsers]=useState([])
    const[loading,setLoading]=useState(false)
    const[error,setError]=useState(null)

    useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
     fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
    return(
        <>
         <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>

        </>
    )
}

export default UserProfile;