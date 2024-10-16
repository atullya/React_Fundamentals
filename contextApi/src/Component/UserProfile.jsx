import UpdateUser from "./UpdateUser";
import { UserContext } from "./UserContext";
import React, { useContext } from "react";

export default function UserProfile() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>User Profile</h1>
      <UpdateUser />
      <p>Name: {user.name}</p>
    </div>
  );
}
