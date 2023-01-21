import React, { useState, useEffect } from "react";
const Profile = () => {
  const id = JSON.parse(localStorage.getItem("user")).id;
  const [user, setUser] = useState(undefined);

  const fetchUser = async () => {
    const response = await fetch(`https://dummyjson.com/users/${id}`);
    const data = await response.json();
    setUser(data);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  if (!user) {
    return <div className="card ">User not Found!!</div>;
  }
  return (
    <div className="card bg-light">
      <h3 className="card-title">{user.firstName + " " + user.lastName}</h3>
      <img src={user.image} alt="Pic" />
      <div className="card-body">
        <p className="card-text">Gender : {user.gender}</p>
        <p className="card-text">ID : {user.id}</p>
        <p className="card-text">UserName : {user.username}</p>
        <p className="card-text">Email : {user.email}</p>
        <p className="card-text">birthDate : {user.birthDate}</p>
        <p className="card-text">AGE : {user.age}</p>
        <p className="card-text">Address : {user.address.address}</p>
      </div>
    </div>
  );
};

export default Profile;
