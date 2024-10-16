import { createContext } from "react";
import "./App.css";
import ComponentA from "./Component/ComponentA";
import UserProfile from "./Component/UserProfile";
import { UserProvider } from "./Component/UserContext";

export const Data = createContext();
export const Data1 = createContext();
const name = "Atullya";
const age = {
  height: "5ft 11",
  rollno: "23",
};

function App() {
  return (
    <>
      <UserProvider>
        <UserProfile />
      </UserProvider>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentA />
        </Data1.Provider>
      </Data.Provider>
    </>
  );
}

export default App;
