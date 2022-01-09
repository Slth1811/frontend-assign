import React from "react";
import "./TripList.css";

const TripList = ({ trips }) => {
    return (
        <div className="trip-list">
            {trips.map((trip) => (
                <div className="trip-preview" key={trip.eid}>
                    <div className="headimage">
                        <img src={trip.photos[0]}></img>
                    </div>
                    <div className="body">
                        <div className="head">
                            <h2>{trip.title}</h2>
                            <div className="description">
                                <p>{trip.description.substring(0,150)}...</p>
                                <a href={trip.url} target="_blank">อ่านต่อ</a>
                                <div className="tag">หมวด: {trip.tags.join(", ")}</div>
                            </div>
                            <div className="mini-image">
                                {trip.photos.slice(1,).map((photo,index) => (
                                    <img src={photo} key={index}></img>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TripList;
