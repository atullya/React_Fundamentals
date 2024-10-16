import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";

export default function UpdateUser() {
  // Access the updateUser function from UserContext
  const { updateUser } = useContext(UserContext);

  // State to store the new name entered by the user
  const [newName, setNewName] = useState("");

  // Handler to update the user name
  const handleUpdate = () => {
    if (newName.trim()) {
      updateUser(newName); // Call updateUser with the new name
      setNewName(""); // Clear the input field after updating
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Update User Name</h2>
      <input
        type="text"
        placeholder="Enter new name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)} // Update state with input value
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "300px",
          marginBottom: "10px",
        }}
      />
      <br />
      <button
        onClick={handleUpdate}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Update Name
      </button>
    </div>
  );
}
