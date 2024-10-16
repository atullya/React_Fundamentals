import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { blog } from "./Data/blog";
import Footer from "./Footer";
import { Header } from "./Header";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import PropsandState from "./PropsandState";
import styles from "./Button.module.css";

function App() {
  // let name = "Atullya";
  // let fruits = ["Apple ", "Orange"];
  // let obj = {
  //   name: "John",
  //   Address: "Bafal",
  // };
  // let status = true;

  let [count, setcount] = useState(1);

  let displayData = () => {
    alert("Hello bro");
  };
  let addData = (a, b) => {
    return a + b;
  };
  let obj = {
    name: "John",
    Address: "Bafal",
    Phone: "2342342",
  };
  let arr = ["apple", "orange"];
  return (
    <>
    
    <span>&times;</span>
    <span>&#9776;</span>
    <span>&#9775;</span>
      <button className={styles.error}>Error</button>
      {count}
      <button onClick={() => setcount(count + 1)}>Increment COunt</button>
      <button
        onClick={() => {
          addData(1, 2);
        }}
      >
        Add Data
      </button>
      <button
        onClick={() => {
          displayData();
        }}
      >
        Hello!!
      </button>
      <FontAwesomeIcon icon={faWhatsapp} />
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faPhone} />
      {}
      <Header num={obj} arr={arr} email="atulmzn1@gmail.com">
        <h2>Welcome to my YouTube Channel</h2>
      </Header>
      <div className="container">hello</div>
      {blog.map((v, index) => {
        return <ProductItems pitems={v} idx={index} key={index} />;
      })}

      <PropsandState country="Nepal" />
      <Footer />
      {/* {(status) ? <h1 style={{color:"red", backgroundColor:"blue" }}>Welcome</h1> : <h2>False</h2>} */}
    </>
  );
}

export default App;
function ProductItems({ pitems, idx }) {
  // Use destructuring with a single props object
  return (
    <div className="col-lg-3">
      {idx}
      {pitems.name}
      <br />
      {pitems.email}
      <br />
      <br />
    </div>
  );
}
