import React, { useContext } from "react";
import { Data } from "./App";

function Component1() {
  const { news, user, country } = useContext(Data);

  return (
    <div>
      {/* {country.map((v, i) => {
        return <div key={i}>{v.fifa}</div>;
      })} */}
      {country && country.length > 0 ? (
        <div>{country[0].fifa}
        <br/>
        {country[0].capital}
        <br/>
        <img src={country[0].coatOfArms.png} alt=""  height={200}/>
        </div>
      ) : (
        <div>No data available</div>
      )}

      <h1>My name is {user.name}</h1>
      {news.articles ? (
        news.articles.map((v, i) => {
          return (
            <div key={i}>
              <p>Author: {v.author || "Unknown"}</p>
              <p>Content: {v.content || "Unknown"}</p>
              <button
                onClick={() => {
                  alert(v.author);
                }}
              >
                Show Details
              </button>
            </div>
          );
        })
      ) : (
        <p>Loading news...</p>
      )}
    </div>
  );
}

export default Component1;
