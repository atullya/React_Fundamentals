import React, { useContext } from "react";
import { Data, Data1 } from "../App";

export default function ComponenetC() {
  const usename = useContext(Data);
  const Age = useContext(Data1);
  return (
    <div>
      <h1>My Name is {usename} </h1>
      <h1>I am {Age.height}</h1>

      {/* this is not good approact however it solve prop drilling here form more data we have more callback functin to resolve it we use useContext() Hook */}
      {/* <Data.Consumer>
        {(name) => {
          //   return <h1>{name}</h1>;
          return (
            <Data1.Consumer>
              {(age) => {
                return (
                  <h1>
                    My name is {name} and I am {age.height} years old
                  </h1>
                );
              }}
            </Data1.Consumer>
          );
        }}
      </Data.Consumer> */}
    </div>
  );
}
