import React from "react";
import "./Card.css";

const Card = props => (
  <div className="Card">
    <img src={props.image} />
    <h3>{props.title}</h3>
    <p>{props.text}</p>
    {props.shuttle && (
      <div className="Shuttle">
        <button
          onClick={() =>
            (window.location.href =
              "itms-services://?action=download-manifest&url=https://almustachar.com/ahmad/shuttleManifest.plist")
          }
        >
          <img src={props.apple} />
        </button>
        <button
          onClick={() =>
            (window.location.href =
              "itms-services://?action=download-manifest&url=https://almustachar.com/ahmad/shuttleManifest.plist")
          }
        >
          <img src={props.android} />
          >
        </button>
      </div>
    )}
  </div>
);

export default Card;
