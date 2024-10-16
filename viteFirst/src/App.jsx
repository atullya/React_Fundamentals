import { useState } from "react";

import "./App.css";
import "react-notifications/lib/notifications.css";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { tabData } from "./Component/Tabs";
function App() {
  // const notify = () => toast.info("Wow so easy!");

  let [todolist, settodolist] = useState([]);
  let [activeTab, setactiveTab] = useState(0);
  let [activeContent, setactiveContent] = useState(tabData[0]);

  let changeData = (index) => {
    setactiveTab(index);
    setactiveContent(tabData[index]);
  };

  //to delete a todolist
  let saveToDoList = (event) => {
    event.preventDefault();
    let todoname = event.target.todoname.value;
    if (!todolist.includes(todoname)) {
      let finaltodolist = [...todolist, todoname];
      settodolist(finaltodolist);
    } else {
      alert("ToDo Name Already Exist...");
    }
  };

  let list = todolist.map((value, index) => {
    return (
      <ToDoLIstItems
        value={value}
        key={index}
        indexNumber={index}
        todolist={todolist}
        settodolist={settodolist}
      />
    );
  });
  return (
    <>
      {/* <button onClick={notify}>Notify!</button>

        <ToastContainer />
     
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div className="tabsOuter">
        <h1>Tab Links</h1>
        <ul>
          {tabData.map((e, i) => {
            return (
              <li>
                <button
                  onClick={() => {
                    changeData(i);
                  }}
                  className={activeTab == i ? "activeButton" : ""}
                >
                  {e.title}
                </button>
              </li>
            );
          })}

          {activeContent !== undefined ? (
            <p>{activeContent.description}</p>
          ) : (
            ""
          )}
        </ul>
      </div>

      <h1>To DO List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="todoname" /> <button>add</button>
      </form>
      <div className="outerdif">
        <ul>{list}</ul>
      </div>
    </>
  );
}

export default App;

function ToDoLIstItems({ value, indexNumber, todolist, settodolist }) {
  let deleteRow = () => {
    let finalLIst = todolist.filter((v, i) => i != indexNumber);
    settodolist(finalLIst);
  };
  return (
    <li>
      {indexNumber + 1} {value} <span onClick={deleteRow}>&times;</span>
    </li>
  );
}
