import { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // Define state to hold form data
  const [formData, setFormData] = useState({
    uname: "",
    upassword: "",
    uemail: "",
    uphone: "",
    index: "",
  });

  // State to hold submitted user data
  const [userData, setUserData] = useState([]);

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const currentUserData = {
      uname: formData.uname,
      upassword: formData.upassword,
      uemail: formData.uemail,
      uphone: formData.uphone,
    };

    // Check if we are updating an existing user or adding a new one
    if (formData.index === "") {
      // Create a new user
      const updatedUserData = [...userData, currentUserData];
      setUserData(updatedUserData);
      toast.success("User added successfully!");
    } else {
      // Update existing user
      const updatedUserData = [...userData];
      updatedUserData[formData.index] = currentUserData;
      setUserData(updatedUserData);
      toast.success("User updated successfully!");
    }

    // Clear the form fields after submission
    setFormData({
      uname: "",
      upassword: "",
      uemail: "",
      uphone: "",
      index: "",
    });
  };

  // Handle user deletion
  const handleDelete = (index) => {
    const filteredData = userData.filter((_, i) => i !== index);
    setUserData(filteredData);
    toast.success("User deleted successfully!");
  };

  // Handle user edit
  const handleEdit = (index) => {
    const editData = userData[index];
    setFormData({ ...editData, index: index });
  };

  return (
    <>
      {/* Form submission handler */}
      <form onSubmit={handleSubmit}>
        {/* Display the length of userData to see how many users have been added */}
        <p>Number of Users: {userData.length}</p>
        <br />
        <label>UserName</label>
        <input
          type="text"
          name="uname"
          value={formData.uname}
          onChange={handleChange}
        />
        <br />

        <label>Password</label>
        <input
          name="upassword"
          type="password"
          value={formData.upassword}
          onChange={handleChange}
        />
        <br />

        <label>Email</label>
        <input
          type="email"
          name="uemail"
          value={formData.uemail}
          onChange={handleChange}
        />
        <br />

        <label>Phone</label>
        <input
          type="text"
          name="uphone"
          value={formData.uphone}
          onChange={handleChange}
        />
        <br />

        {/* Button text changes based on whether formData.index is empty */}
        <button type="submit">
          {formData.index !== "" ? "Update" : "Save"}
        </button>
      </form>

      {/* Display user data list */}
      <div>
        <h2>{userData.length === 0 ? "No Data Found" : "User Data List"}</h2>
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.length > 0 ? (
              userData.map((element, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{element.uname}</td>
                  <td>{element.uemail}</td>
                  <td>{element.upassword}</td>
                  <td>{element.uphone}</td>
                  <td>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6}>No Data Found</td>
              </tr>
            )}
          </tbody>
        </table>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
