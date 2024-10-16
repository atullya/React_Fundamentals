import React, { useState } from "react";

export default function PropsandState(props) {
  let [country, setCountry] = useState("");
  let [status, setStatus] = useState(false); // State variable for status

  let [pshow, setpshow] = useState(false);
  let template = "";
  if (pshow) {
    template = (
      <>
        <button
          onClick={() => {
            setpshow(!pshow);
          }}
        >
          Hide
        </button>
        <h1>Hello, My Name is Atullya</h1>
      </>
    );
  } else {
    template = (
      <button
        onClick={() => {
          setpshow(!pshow);
        }}
      >
        Show
      </button>
    );
  }
  // This function updates the country state to the prop value and sets status to true
  function ShowCountry() {
    setCountry(props.country);
    setStatus(true); // Update the status state
  }

  return (
    <div>
      {template}
      {/* Button to show the country */}
      <button onClick={ShowCountry}>Show Country</button>

      {/* Conditionally render the country name based on the status */}
      {status ? <p>My country name is {country}</p> : ""}
    </div>
  );
}
