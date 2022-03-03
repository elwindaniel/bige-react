import React from "react";
import PageTitle from "../../menu/pageTitle";
import Container from "@material-ui/core/Container";
import LevelTest1 from "../../forms/test1";

function LevelTest(props) {
  return (
    <div>
      <PageTitle title={"Level Test"} />
      <Container maxWidth="md" style={{ padding: "20px" }}>
        <LevelTest1 />
      </Container>
    </div>
  );
}

export default LevelTest;
