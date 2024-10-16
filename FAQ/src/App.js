import React, { useState } from "react";
import "./App.css";
import { question } from "./FAQ/question";
import { Faqs } from "./Component/Faq/Faqs";

function App() {
  // State to toggle between 'text' and 'password' input types
  let [pstatus, setpstatus] = useState(false);
  let [menustatus, setmenustatus] = useState(false);

  let [modalStatus, setmodalStatus] = useState(false);

  let [showans, setshowans] = useState(question[0].id);
  return (
    <div>
      <button
        className="en"
        onClick={() => {
          setmodalStatus(true);
        }}
      >
        Enquiry Now
      </button>
      <div className={`modalOverlay ${modalStatus ? "modalshow" : ""}`}></div>
      <div className={`ModalDiv ${modalStatus ? "showModalDiv" : ""}`}>
        <h3>
          Enquiry Now{" "}
          <span
            onClick={() => {
              setmodalStatus(false);
            }}
          >
            &times;
          </span>
        </h3>
      </div>
      <button className="micon" onClick={() => setmenustatus(!menustatus)}>
        {menustatus ? <span>&times;</span> : <span>&#9776;</span>}
      </button>
      <div className={`menu ${menustatus ? "activeMenu" : ""}`}>
        <ul>
          <li>HOme</li>
          <li>About Us</li>
          <li>HOme</li>
          <li>HOme</li>
        </ul>
      </div>
      <input type={pstatus ? "text" : "password"} />
      <button onClick={() => setpstatus(!pstatus)}>
        {pstatus ? "Hide" : "Show"}
      </button>

      {/* faq */}
      {/* <div className="faqouter">
        {question.map((items, index) => {
          return (
            <div className="faqItems">
              <h2
                onClick={() => {
                  setshowans(items.id);
                }}
              >
                {items.quesiton}
              </h2>
              <p className={showans == items.id ? "activeans" : ""}>
                {items.answer}
              </p>
            </div>
          );
        })}
      </div> */}

      {/* props drilling faq */}
      <Faqs />
    </div>
  );
}

export default App;
