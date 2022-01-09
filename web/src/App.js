import React, { useEffect, useState } from "react";
import "./App.css";
import TripList from "./trip/TripList";

function App() {
  const [trips, setTrips] = useState([]);
  const [searchWord, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:9000/trips")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTrips(data);
      });
  }, []);

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
      <div className="list">
        <TripList trips={searchKey(trips)} />
      </div>
    </div>
  );
}

export default App;
