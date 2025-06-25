import React from "react";

function ProfileCard({ name = 'Anonymous', age, bio = 'No biography provided' }){
   
     const truncatedBio = bio.length > 100 
    ? `${bio.substring(0, 100)}... Read More` 
    : bio;

    return(
        <>
        <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '20px',
      maxWidth: '300px',
      margin: '20px auto',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif'
    }}>
            <h2  style={{
        margin: '0 0 10px',
        color: '#333',
        borderBottom: '1px solid #eee',
        paddingBottom: '10px'
      }}>
                Name:{name}
            </h2>

            <p style={{
        color: '#666',
        margin: '5px 0',
        fontSize: '0.9em'
      }}>Age:{age}</p>

            <p style={{
        color: '#666',
        margin: '5px 0',
        fontSize: '0.9em'
      }}>Bio:{bio}</p>
      
        </div>
        </>
    )

}

export default ProfileCard;