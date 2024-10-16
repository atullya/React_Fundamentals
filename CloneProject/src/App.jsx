import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import TopHeading from "./Component/TopHeading/TopHeading";
import Home from "./Pages/Home";
import BookHospital from "./Pages/BookHospital";
import BookAppointment from "./Pages/BookAppointment";
import HealthPackage from "./Pages/HealthPackage";
import ErroPage from "./Pages/ErroPage";
import HospitalDetail from "./Component/Appointment/HospitalDetail";

function App() {
  let allroute = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/book-hospital",
      element: <BookHospital />,
    },
    {
      path: "/book-appointment",
      element: <BookAppointment />,
    },
    {
      path: "/health-package",
      element: <HealthPackage />,
    },
    {
      path: "/hospital/:business_id",
      element: <HospitalDetail />,
    },
    {
      path: "*", // Fallback route for undefined paths
      element: <ErroPage />, // Component for 404 Not Found
    },
  ]);

  return (
    <>
      <TopHeading />

      <RouterProvider router={allroute} />
    </>
  );
}

export default App;
