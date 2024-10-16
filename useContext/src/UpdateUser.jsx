import React, { useContext } from "react";
import { Data } from "./App";

export default function UpdateUser() {
  const { setUser } = useContext(Data);
  return (
    <div>
      <button
        onClick={() => {
          setUser({ name: "Maharjan" });
        }}
      >
        Update User
      </button>
    </div>
  );
}
