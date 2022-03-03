import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
  CircularProgress
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { fs } from "../../../firebase";
import PageTitle from "../../menu/pageTitle";

function Blogs() {
    const history = useHistory()
  const [blogsList, setBlogsList] = useState([]);
  const GetBlogs = () => {
    fs.collection("blogs")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          var data = element.data();
          console.log(element,data,"elements");
          setBlogsList((arr) => [...arr, element]);
        });
      });
  };
  useEffect(() => {
    GetBlogs();
  }, []);

//   ${item._id}

const BlogPage=(blog)=>{
    history.push(`/blog/${blog.id}`)
}
  return (
    <div>
      <PageTitle title={"Blogs"} />
      <Container
        maxWidth="md"
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      ></Container>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          textAlign: "center",
        }}
      >
        {blogsList?.length > 0
          ? blogsList.map((blog, index) => (
              <Card
              key={index}
                sx={{ minWidth: 250 }}
                style={{ maxWidth: 350, margin: 10 }}
                onClick={()=>BlogPage(blog)}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={blog.data().url}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {blog.data().title}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="b1"
                      component="div"
                      style={{ textAlign: "left", fontWeight: "bold" }}
                    >
                  {Date(blog.data().date.seconds).slice(0, 15)} 
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))
          : <CircularProgress/>}
      </div>
    </div>
  );
}

// .collection('blogs')
//                   .doc(widget.id)

export default Blogs;
