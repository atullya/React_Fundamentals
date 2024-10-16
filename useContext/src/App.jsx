import { createContext, useEffect, useState } from "react";
import "./App.css";
import Component1 from "./component1";
import UpdateUser from "./UpdateUser";

// Create the context
export const Data = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Atullya" });
  const [news, setNews] = useState([]);
  const [country, setcountry] = useState([]);

  const getCountryNews = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/name/Nepal");
      const countryData = await response.json();
      console.log(countryData);
      setcountry(countryData);
    } catch (error) {
      console.log(error);
    }
  };

  const getNews = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=apple&from=2024-10-15&to=2024-10-15&sortBy=popularity&apiKey=1cd4d0bcd00f4a3a8928a37ebe2a1a99"
      );
      const newsData = await response.json();
      setNews(newsData);
      console.log(newsData);
    } catch (error) {
      console.log("Error fetching news:", error);
    }
  };

  useEffect(() => {
    getNews();
    getCountryNews();
  }, []);

  return (
    <Data.Provider value={{ user, setUser, news, country }}>
      {children}
    </Data.Provider>
  );
};

function App() {
  return (
    <DataProvider>
      <Component1 />
      <UpdateUser />
    </DataProvider>
  );
}

export default App;
