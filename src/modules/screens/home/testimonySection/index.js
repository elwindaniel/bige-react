import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import { TitleText2 } from "../../../components/text";
import { COLORS } from "../../../components/color";
import Rating from "@material-ui/lab/Rating";
import { Button, MobileStepper, useTheme } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { fs } from "../../../../firebase";

function ServiceSection() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [testimonies, setTestimonies] = useState([]);
  const maxSteps = testimonies.length> 5?5:testimonies.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

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
  return (
    <Container maxWidth="md" style={{ padding: "10px", paddingTop: "50px" }}>
     
      {testimonies.length > 0 ? (
        <>
         <TitleText2
         text={"See What Students Have To Say"}
         color={COLORS.BLUE}
         textAlign={"center"}
       />
        <div style={{ textAlign: "center", margin: "50px" }}>
          <div style={{ marginTop: "20px" }}>
            {testimonies[activeStep].testimony}
          </div>
          <br />
          <Rating
            name="simple-controlled"
            value={testimonies[activeStep].rating}
          />
          <div style={{ fontWeight: "bold", marginTop: "20px" }}>
            {testimonies[activeStep].name}
          </div>

          <MobileStepper
            style={{ backgroundColor: "#fff" }}
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </div></>
      ) : null}
    </Container>
  );
}

export default ServiceSection;
