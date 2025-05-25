import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ name, age, bio }) => {
  // Improved truncation logic
  const displayBio = bio.length > 100 
    ? `${bio.substring(0, 97)}...` // Shows exactly 100 chars including "..."
    : bio;

  return (
    <div className="profile-card">
      <h2 className="profile-name">{name}</h2>
      <p className="profile-meta">Age: {age}</p>
      <p className="profile-bio">
        {displayBio}
        {bio.length > 100 && <span className="read-more"> Read More</span>}
      </p>
    </div>
  );
};

ProfileCard.defaultProps = {
  name: "Anonymous User",
  age: 0,
  bio: "No biography provided."
};

export default ProfileCard;