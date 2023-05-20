// UserInformation.js
import React from 'react';

function UserInformation({ userData }) {
  return (
    <div className="user-information">
      <img src={userData.avatar_url} alt="User Avatar" className="avatar" />
      <div className='user-details'>
      <h2 className='head'>{userData.name}</h2>
      <div className='user-stats'>
      
      <p id="a">Followers: {userData.followers}</p>
      <p id="b">Following: {userData.following}</p>
      </div>
      </div>
      </div>
  );
}

export default UserInformation;
