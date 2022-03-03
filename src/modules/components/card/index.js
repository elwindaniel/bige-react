import React from "react";
import { TitleText2, BodyText } from "../text";

import "./card.css";

export default function MediaCard(props) {
  const {title, img , body} = props;
  return (
    <div className="subject-card card py-4" style={{ backgroundColor: "#fff" }}>
      <div>
        <div className="circle">
          <img src={img} alt="" />
        </div>
        <div
          style={{
            marginTop: "20px",
            marginLeft: "200px",
            marginRight: "10px",
          }}
        >
          <TitleText2 text={title} color={"#ef483e"} />
          <BodyText
            text={body} 
            color={"#171E4B"}
          />
          <div>Read More...</div>
        </div>
      </div>
    </div>
  );
}
