import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Images/logo.png";
import "./Header.css";
import Form from "./Form/Form";

export default function Header() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("Home");
  const [menustatus, setmenustatus] = useState(false);
  const [getlogin, setlogin] = useState(false);

  useEffect(() => {
    switch (location.pathname) {
      case "/book-hospital":
        setActiveTab("BookHospital");
        break;
      case "/book-appointment":
        setActiveTab("BookAppointment");
        break;
      case "/health-package":
        setActiveTab("Health");
        break;
      default:
        setActiveTab("Home");
    }
  }, [location.pathname]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      {/* Pass props to Form component */}
      <Form setlogin={setlogin} getlogin={getlogin} />
      <div className="m-0 flex justify-between items-center p-[20px] mx-[50px]">
        <div className="logo flex items-center font-serif font-bold text-[40px]">
          <img
            src={Logo}
            alt="Curefy Logo"
            className="w-[40px] h-[40px] mr-2"
          />
          Curefy
        </div>

        <nav>
          <ul className="flex gap-[30px] text-[18px] space-x-3 items-center">
            <ListItem
              active={activeTab === "Home"}
              onClick={() => handleTabClick("Home")}
              to="/"
            >
              Home
            </ListItem>
            <ListItem
              active={activeTab === "BookHospital"}
              onClick={() => handleTabClick("BookHospital")}
              to="/book-hospital"
            >
              Book Hospital Appointment
            </ListItem>
            <ListItem
              active={activeTab === "BookAppointment"}
              onClick={() => handleTabClick("BookAppointment")}
              to="/book-appointment"
            >
              Book Appointment
            </ListItem>
            <ListItem
              active={activeTab === "Health"}
              onClick={() => handleTabClick("Health")}
              to="/health-package"
            >
              Health Package
            </ListItem>
          </ul>
        </nav>

        <div className="button flex gap-[25px] items-center">
          {/* Correctly pass props to handle form toggling */}
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setlogin(!getlogin)}
          >
            Login
          </button>
          <button
            className="text-[30px]"
            onClick={() => setmenustatus(!menustatus)}
          >
            {menustatus ? <>&times;</> : <>&#9776;</>}
          </button>
        </div>
      </div>
      <div className={`menu ${menustatus ? "active-menu" : ""}`}>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
      </div>
    </div>
  );
}

function ListItem({ children, active, onClick, to }) {
  return (
    <li
      onClick={onClick}
      className={`cursor-pointer rounded ${
        active ? "text-white bg-[#037C86] p-[10px]" : "text-black"
      }`}
    >
      <Link to={to} className="block h-full w-full">
        {children}
      </Link>
    </li>
  );
}
