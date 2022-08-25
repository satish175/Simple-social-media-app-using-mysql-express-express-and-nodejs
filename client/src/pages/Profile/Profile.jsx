import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Image } from "cloudinary-react";
import "./profile.css";
export default function Profile() {
  const [yourUploads, setYourUploads] = useState([]);
  useEffect(() => {
    Axios.get(
      `http://localhost:3001/upload/byUser/${localStorage.getItem("username")}`
    ).then((response) => {
      setYourUploads(response.data);
    });
  });
  return (
    <div className="profile">
      <h1>{localStorage.getItem("username")}</h1>
      {yourUploads.map((val) => {
        return (
          <div className="post">
            <div className="image">
              <Image cloudName="dilc1zavm" publicId={val.image}></Image>
            </div>
            <div className="content">
              <div className="title">
                {" "}
                {val.title} / by @{val.author}
              </div>
              <div className="description">{val.description}</div>
            </div>
            <div>{val.likes}</div>
          </div>
        );
      })}
    </div>
  );
}
