import {
  CircularProgress,
  Container,
  Typography,
} from "@material-ui/core";

import React, { useState, useEffect } from "react";
import { fs } from "../../../firebase";


function Blog(props) {
  const [blog, setBlog] = useState({});
  const [blogContent, setBlogContent] = useState("");
  const GetBlogs = () => {
    fs.collection("blogs")
      .doc(props.match.params.Id)
      .get()
      .then((docRef) => {
        setBlog(docRef.data());
        setBlogContent(
          docRef
            .data()
            .content.replaceAll("“nxt”", "<br/>")
            .replaceAll("“t”", "<h2>")
            .replaceAll("“/t”", "</h2>")
            .replaceAll("“st”", "<h4>")
            .replaceAll("“/st”", "</h4>")
        );
      });
  };
  let date = Date(blog?.date?.seconds).slice(0, 15)
  useEffect(() => {
    GetBlogs();
  }, []);
  return (
    <div>
      {blog ? (
        <div>
          <img
          alt="img"
            src={blog?.url}
            style={{ width: "100%", height: "65vh", objectFit: "cover" }}
          />
          <Container
            maxWidth="md"
            style={{
              padding: "20px",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <br />
            <Typography gutterBottom variant="h6" component="div">
            {date} 
            </Typography>
            <Typography gutterBottom variant="h4" component="div">
              {blog?.title}
            </Typography>
            <br />
            <div
              style={{ textAlign: "left" }}
              dangerouslySetInnerHTML={{ __html: blogContent }}
            />
          </Container>
          <br />
        </div>
      ) : <CircularProgress />}
    </div>
  );
}

export default Blog;
