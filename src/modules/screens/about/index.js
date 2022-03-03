import React from "react";
import PageTitle from "../../menu/pageTitle";
import Container from "@material-ui/core/Container";

function About(props) {
  return (
    <div>
      <PageTitle title={"Who we are ?"} />
      <Container
        maxWidth="md"
        style={{ padding: "20px", paddingTop: "50px", paddingBottom: "50px" }}
      >
        <div style={{ fontSize: "18px", paddingTop: "20px" }}>
          Greetings! My name is{" "}
          <span style={{ fontWeight: "bold" }}>Sherlin.</span> I grew up in
          different countries as a part of my father’s work, but I’ve always had
          big dreams. Now, my goal is to help people speak English confidently
          and fluently. Learning a foreign language could be difficult,
          embarrassing and boring. We at{" "}
          <span style={{ fontWeight: "bold" }}>BIGE</span> will teach you to
          enjoy the English-learning process so that you can feel proud of every
          word that you say. Aristophanes quoted, “High thoughts must have high
          language”. One of the best gifts is the combination of language and
          literature, and the appropriate use of any language has its own charm.
          BIGE is an initiation to help students across the country to achieve
          their linguistic acumen. We emphases on individual student attention.
          That is, every student would be allotted with a mentor throughout
          their language learning journey. To build a solid ‘common ground’, we
          provide one-on-one classes, where the students are taught the four
          different modules (Listening, Reading, Writing, and Speaking) of
          language learning at their convenient time.
        </div>
        <div style={{ fontSize: "18px", paddingTop: "20px" }}>
          The various method used by the mentors, is our earnest endeavour to
          help the learners from all walks of life to successfully complete the
          course. We provide enough and ample opportunities for anyone who
          desires to have a command over the language.
        </div>
        <div style={{ fontSize: "18px", paddingTop: "20px" }}>
          Many people across the country know English language as part of their
          school academics. However, very few people know to find errors
          themselves while communicating or writing. For instance, we challenge
          you to read the few sentences below. Find the error and drop us a text
          message on whatsapp application explaining those mistakes.{" "}
        </div>
        <div
          style={{ fontSize: "18px", paddingTop: "20px", fontStyle: "italic" }}
        >
          Education is generally consider as the most important factor for
          development. The importance of education is that it enable people to
          study and utilise natural resources. Education promotes analytic study
          and rational thinking and enlighten human minds.{" "}
        </div>
        <div style={{ fontSize: "18px", paddingTop: "20px" }}>
          We encourage you to check out our reviews, which will help you make a
          better decision.{" "}
        </div>
        <div
          style={{ fontSize: "18px", paddingTop: "20px", fontWeight: "bold" }}
        >
          <br />
          WHAT ARE YOU WAITING FOR?
          <br />
          Come and join us.{" "}
        </div>
      </Container>
    </div>
  );
}

export default About;
