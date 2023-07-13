import React, { useState, useEffect } from "react";
import '../styles/prof.css';
import Nava from './Nava';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token'); // Retrieve the token from the local storage
    console.log(token);
    fetch('https://cancerserver.onrender.com/api/user', {
      method: 'GET',
      credentials: 'include',
      headers: {
        Authorization: `Bearer ${token}`, // Pass the token in the request headers
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === 'ok') {
          setUser(data.user);
        }
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
      });
  }, []);
  

  return (
    <>
      <div id="nav1">
        <Nava />
      </div>
      <br /><br />
      <div class="container" id="dome18">
        <br /><br />
        <h2 id="tres18"><u>Profile:</u></h2>
        <br /><br />
        {user ? (
          <h5>
            Name: {user.name}<br /><br />
            Username: {user.uname}<br /><br />
            Hospital: {user.hospital}<br /><br />
          </h5>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
      <br />
    </>
  );
}

export default Profile;
