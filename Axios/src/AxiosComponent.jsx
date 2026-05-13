// import api axios
import axios from "axios";
import "./AxiosComponent.css";
import { useState } from "react";

export default function AxiosComponent() {
  const [datavar, showData] = useState(null);

  const fetchCat = () => {
    axios
      .get("https://api.thecatapi.com/v1/images/search")
      .then((response) => {
        showData(response.data[0]);

        console.log(response.data[0].url);
      })
      .catch((error) => {
        console.error("Error fetching cat data:", error);
      });
  };

  return (
    <>
      <div>
        <h1>Axios Test</h1>
      </div>

      <div>
        <button onClick={fetchCat}>Fetch Cat Data</button>
      </div>

      {/* Show API data here */}
      {datavar && (
        <div>
          <h2>Cat Image</h2>

          <img src={datavar.url} alt="Cat" width="300" />

          <p>Height: {datavar.height}</p>
          <p>Width: {datavar.width}</p>
        </div>
      )}
    </>
  );
}
