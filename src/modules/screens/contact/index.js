import React from "react";
import PageTitle from "../../menu/pageTitle";
import Container from "@material-ui/core/Container";
import ContactForm from "../../forms/contactForm";

function Contact(props) {
  return (
    <div>
      <PageTitle title={"Contact us"} />
      <Container
        maxWidth="md"
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <ContactForm />
      </Container>
    </div>
  );
}

export default Contact;
