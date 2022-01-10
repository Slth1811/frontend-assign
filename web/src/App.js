import React, { useEffect, useState } from "react";
import "./App.css";
import TripList from "./trip/TripList";

function App() {
  const API_URL = "http://localhost:9000/trips"
  const [trips, setTrips] = useState([]);
  const [searchWord, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {

    const fetchItem = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not received expected data')
        const listTrips = await response.json();
        setTrips(listTrips);
        setFetchError(null);
      }
      catch (err) {
        console.log(err.message);
        setFetchError(err.message);
      }
    }

    (async () => await fetchItem())();
  }, [])


  const searchKey = (posts) => {
    return posts.filter(
      (post) =>
        post.title.toLowerCase().indexOf(searchWord) > -1 ||
        post.description.toLowerCase().indexOf(searchWord) > -1 ||
        post.tags.toString().toLowerCase().indexOf(searchWord) > -1
    );
  };

  return (
    <div className="App">
      <div className="Header">เที่ยวไหนดี</div>
      <div className="inputField">
        <input
          type="text"
          placeholder="หาที่เที่ยวแล้วไปกัน..."
          value={searchWord}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {fetchError && <h2 className="Error-message">{`Error: ${fetchError}`}</h2>}
      {!fetchError && 
      <div className="list">
          <TripList trips={searchKey(trips)} />

      </div>
      }
    </div>
  );
}

export default App;
