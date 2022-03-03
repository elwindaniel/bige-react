import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import NewsLetter from "../forms/newsletter";

function Footer() {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <div
      className={classes.footer}
      style={{ display: matches ? "flex" : null }}
    >
      <NewsLetter />
      <div className={classes.mainMenu}>
        Contact no :<br /> +919496983429 +919995057504
      </div>
      <div className={classes.mainMenu}>
        Email :<br /> infobigeacademy@gmail.com
      </div>
      <div className={classes.mainMenu}>
        © Copyright 2021 BigE Acadamey.
        <br />
        All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#121942",
    padding: "25px",
    justifyContent: "space-between",
    textAlign: "left",
  },
  mainMenu: {
    color: "#fff",
    fontWeight: "bold",
    padding: "10px",
    cursor: "pointer",
    "&:hover": {
      color: "#FF4338",
    },
  },
}));
