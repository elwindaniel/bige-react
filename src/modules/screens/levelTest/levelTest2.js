import React from "react";
import PageTitle from "../../menu/pageTitle";
import Container from "@material-ui/core/Container";
import LevelTest2 from "../../forms/test2";

function LevelTest(props) {
  return (
    <div>
      <PageTitle title={"Level Test"} />
      <Container maxWidth="md" style={{ padding: "20px" }}>
        <LevelTest2 />
      </Container>
    </div>
  );
}

export default LevelTest;
