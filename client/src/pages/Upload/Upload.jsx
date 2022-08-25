import React, { useState } from "react";
import "./upload.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Upload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);

  let navigate = useNavigate();

  const upload = () => {
    const formData = new FormData();
    formData.append("file", image[0]);
    formData.append("upload_preset", "a64tdlod");
    Axios.post(
      `https://api.cloudinary.com/v1_1/dilc1zavm/image/upload`,
      formData
    ).then((response) => {
      const fileName = response.data.public_id;

      Axios.post("http://localhost:3001/upload", {
        title: title,
        description: description,
        image: fileName,
        author: localStorage.getItem("username"),
      }).then(() => {
        navigate("/");
      });
    });
  };
  return (
    <div className="upload">
      <h1>Create A Post</h1>
      <div className="uploadForm">
        <input
          type="text"
          placeholder="Title..."
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Description..."
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />

        <input type="file" onChange={(e) => setImage(e.target.files)} />
        <button onClick={upload}>Upload</button>
      </div>
    </div>
  );
}

export default Upload;
