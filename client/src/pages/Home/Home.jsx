import React, { useEffect, useState } from "react";
import { ThumbUpAlt } from "@material-ui/icons";
import Axios from "axios";
import "./home.css";
import { Image } from "cloudinary-react";
const Home = () => {
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      localStorage.setItem("loggedIn", false);
    }
  }, []);
  const [uploads, setUploads] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/upload").then((response) => {
      setUploads(response.data);
      var tempArr = [];

      response.data.map((val) => {
        tempArr.push(val.likes);
      });
      setLikes([tempArr]);
    });
  }, []);

  const likePost = (id) => {
    Axios.post("http://localhost:3001/upload/like", {
      userLiking: localStorage.getItem("username"),
      postId: id,
    }).then((response) => {
      console.log("You liked this post");
    });
  };

  return (
    <div className="home">
      {uploads.map((val, key) => {
        return (
          <div className="post">
            <div className="image">
              <Image cloudName="dilc1zavm" publicId={val.image}></Image>
            </div>
            <div className="content">
              <div className="title">
                {val.title} / by @{val.author}
              </div>
              <div className="description">{val.description}</div>
            </div>
            <div className="like">
              <ThumbUpAlt
                className="likeIcon"
                onClick={() => {
                  likePost(val.id);
                  const tempLikes = uploads;
                  tempLikes[key].likes = tempLikes[key].likes + 1;
                  setLikes(tempLikes);
                }}
              ></ThumbUpAlt>
              {val.likes}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
