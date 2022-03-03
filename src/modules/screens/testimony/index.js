import {
  Container,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { fs } from "../../../firebase";
import PageTitle from "../../menu/pageTitle";


function Testimonials() {
  const [testimonies, setTestimonies] = useState([]);
  const [testmony, setTestimony] = useState();
  const [open, setOpen] = useState(false);
  const GetTestimony = () => {
    fs.collection("testimonies")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          var data = element.data();
          setTestimonies((arr) => [...arr, data]);
        });
      });
  };
  useEffect(() => {
    GetTestimony();
   
  }, []);

  const handleClose = () => {
    setOpen(false)
    setTestimony({})
  };
  const onTestimonyClick = (value)=>{
    setOpen(true) 
    setTestimony(value)
  }
  return (
    <div>
      <PageTitle title={"See What Students Have To Say"} />
      <Container
        maxWidth="md"
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      ></Container>
      <br />
      <br />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          textAlign: "center",
        }}
      >
        {testimonies?.length > 0 ? (
          testimonies.map((testimony, index) => (
            <Card
              key={index}
              sx={{ minWidth: 275 }}
              style={{ maxWidth: 500, margin: 10 }}
            >
              <CardContent>
                <Typography
                  style={{ fontWeight: "bold", textAlign: "left" }}
                  variant="h6"
                >
                  {testimony.name}
                </Typography>
                <div style={{ textAlign: "left" }}>
                  <Rating name="simple-controlled" value={testimony.rating} />
                </div>

                <Typography
                  style={{ textAlign: "left" }}
                  sx={{ fontSize: 14 }}
                  gutterBottom
                >
                  {testimony.testimony.slice(0, 250)}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={()=>onTestimonyClick(testimony)}>Read More</Button>
              </CardActions>
            </Card>
          ))
        ) : (
          <CircularProgress />
        )}
      </div>
      <br />
      <br />
      <Dialog onClose={handleClose} open={open}>
      <DialogTitle>I am {testmony?.name}</DialogTitle>
      <DialogContent>
          <DialogContentText >
          {testmony?.testimony}
          </DialogContentText>
          <br/>
          <span style={{fontWeight:"bold"}}> I like to give <Rating name="simple-controlled" value={testmony?.rating} /> rating</span><br/>
        </DialogContent>

    </Dialog>
    </div>
  );
}

export default Testimonials;
