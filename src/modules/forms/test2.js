import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./forms.css";
import { fs } from "../../firebase";

function Test2() {
  const classes = useStyles();
  const nameInput = useRef(null);
  useEffect(() => {
    nameInput.current.focus();
  }, []);
  const [testLevel2, setTestLevel2] = useState({
    name: "",
    number: "",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    q91: "",
    date: new Date()
  });

  const [testLevel2Msg, settestLevel2Msg] = useState(false);

  const testLevel2HandleChange = (e) => {
    const newtestLevel2 = { ...testLevel2 };
    newtestLevel2[e.target.id] = e.target.value;
    setTestLevel2(newtestLevel2);
  };

  const testLevel2OnSubmit = (e) => {
    e.preventDefault();
    fs.collection("testLevel2")
      .add( testLevel2 )
      .then((res) => {
        console.log(res, "success");
        settestLevel2Msg(true);
        setTestLevel2();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className={classes.title}>
        <span style={{ fontWeight: "bold" }}>Personal Details</span> <br />
        Fill your personal details
      </div>
      {testLevel2Msg ? (
        <div className={classes.successMsg}>
          Thank you we will connect you soon!
        </div>
      ) : (
        <form onSubmit={(e) => testLevel2OnSubmit(e)}>
          <input
            className={"textBox"}
            placeholder="Name"
            required
            id="name"
            ref={nameInput}
            value={testLevel2.name}
            onChange={(e) => testLevel2HandleChange(e)}
          />
          <input
            id="number"
            value={testLevel2.number}
            onChange={(e) => testLevel2HandleChange(e)}
            className={"textBox"}
            placeholder="Whatsapp Phone Number"
            required
          />
          <div className={classes.title}>
            <span style={{ fontWeight: "bold" }}>Level 2 Test</span> <br />
            Fill your answers
          </div>
          <div style={{ fontSize: "18px", margin: "20px" }}>
            1) How many languages do you speak? Which was the most difficult to learn?
          </div>
          <input
            id="q1"
            value={testLevel2.q1}
            onChange={(e) => testLevel2HandleChange(e)}
            className={"textBox"}
            placeholder="Enter Answers Here"
            required
          />
          <div style={{ fontSize: "18px", margin: "20px" }}>
            2) Do you walk a lot? Where do you usually take a walk?
          </div>
          <input
            id="q2"
            value={testLevel2.q2}
            onChange={(e) => testLevel2HandleChange(e)}
            className={"textBox"}
            placeholder="Enter Answers Here"
            required
          />
          <div style={{ fontSize: "18px", margin: "20px" }}>
            3) What is your favourite festival? How do you celebrate it?
          </div>
          <input
            id="q3"
            value={testLevel2.q3}
            onChange={(e) => testLevel2HandleChange(e)}
            className={"textBox"}
            placeholder="Enter Answers Here"
            required
          />
          <div style={{ fontSize: "18px", margin: "20px" }}>
            4) Do you like water sports? Which one do you enjoy the most?
          </div>
          <input
            id="q4"
            value={testLevel2.q4}
            onChange={(e) => testLevel2HandleChange(e)}
            className={"textBox"}
            placeholder="Enter Answers Here"
            required
          />
          <div style={{ fontSize: "18px", margin: "20px" }}>
            5) Do you like to watch the sky? How often do you do it?
          </div>
          <input
            id="q5"
            value={testLevel2.q5}
            onChange={(e) => testLevel2HandleChange(e)}
            className={"textBox"}
            placeholder="Enter Answers Here"
            required
          />
          <div style={{ fontSize: "18px", margin: "20px" }}>
            6) Do you share your things? What are the things that you commonly share?
          </div>
          <input
            id="q6"
            value={testLevel2.q6}
            onChange={(e) => testLevel2HandleChange(e)}
            className={"textBox"}
            placeholder="Enter Answers Here"
            required
          />
          <div style={{ fontSize: "18px", margin: "20px" }}>
            7) Do you have sunglasses? How often do you wear them?
          </div>
          <input
            id="q7"
            value={testLevel2.q7}
            onChange={(e) => testLevel2HandleChange(e)}
            className={"textBox"}
            placeholder="Enter Answers Here"
            required
          />
          <div style={{ fontSize: "18px", margin: "20px" }}>
            8) What is your favourite foreign cuisine? Where did you have it for the first time?
          </div>
          <input
            id="q8"
            value={testLevel2.q8}
            onChange={(e) => testLevel2HandleChange(e)}
            className={"textBox"}
            placeholder="Enter Answers Here"
            required
          />
          <div style={{ fontSize: "18px", margin: "20px" }}>
            9) Do you like plants? Do you know anything about growing them?
          </div>
          <input
            id="q9"
            value={testLevel2.q9}
            onChange={(e) => testLevel2HandleChange(e)}
            className={"textBox"}
            placeholder="Enter Answers Here"
            required
          />
          <div style={{ fontSize: "18px", margin: "20px" }}>
            10) Do you like using social websites? What do you commonly use it for?
          </div>
          <input
            id="q91"
            value={testLevel2.q91}
            onChange={(e) => testLevel2HandleChange(e)}
            className={"textBox"}
            placeholder="Enter Answers Here"
            required
          />
          <br />
          <button className={classes.button}>Submit Answer</button>
        </form>
      )}
      {/* <div style={{ fontSize: "17px", marginTop: "20px",fontWeight:"bold" }}>
      {"If you feel this simple, Click Here to attend 2nd Level Test >"}
      </div> */}
    </div>
  );
}

export default Test2;
const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "30px",
    color: "#000",
    marginBottom: "40px",
    marginTop: "40px",
  },
  button: {
    backgroundColor: "#FF4338",
    padding: "15px",
    border: "none",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#000",
    },
  },
  successMsg: {
    fontSize: "30px",
    color: "#FF4338",
    marginBottom: "40px",
    marginTop: "40px",
  },
}));
