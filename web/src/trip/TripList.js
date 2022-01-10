import React from "react";
import "./TripList.css";

const TripList = ({ trips }) => {
    const max_length = 150; // maximum length of description string
    // if (trips.length === 0) // empty list
    // {
    //     return (
    //         <div className="Error-message">
    //             <h2>Trip list is not available.</h2>
    //         </div>
    //     )
    // }
    
    return (
        <div className="trip-list">
            {trips.length ? (
                trips.map((trip) => (
                <div className="trip-preview" key={trip.eid}>
                    <div className="headimage">
                        <img src={trip.photos[0]}></img>
                    </div>
                    <div className="body">
                        <div className="head">
                            <h2>{trip.title}</h2>
                            <div className="description">
                                <p>{trip.description.substring(0,max_length)}...</p>
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
            ))
            ) : (
                <h2 className="Error-message">Loading...</h2>
            )
        }
            
        </div>
    );
};

export default TripList;
