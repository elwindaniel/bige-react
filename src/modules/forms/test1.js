import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { fs } from "../../firebase";
import { Link } from "react-router-dom";
import "./forms.css";
function Test1() {
  const classes = useStyles();
  const nameInput = useRef(null);
  useEffect(() => {
    nameInput.current.focus();
  }, []);

  const [testLevel1, setTestLevel1] = useState({
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

  const [testLevel1Msg, settestLevel1Msg] = useState(false);

  const testLevel1HandleChange = (e) => {
    const newtestLevel1 = { ...testLevel1 };
    newtestLevel1[e.target.id] = e.target.value;
    setTestLevel1(newtestLevel1);
  };

  const testLevel1OnSubmit = (e) => {
    e.preventDefault();
    fs.collection("testLevel1")
      .add(testLevel1 )
      .then((res) => {
        console.log(res, "success");
        settestLevel1Msg(true);
        setTestLevel1();
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
      {testLevel1Msg ? (
        <div className={classes.successMsg}>
          Thank you we will connect you soon!
        </div>
      ) : (
        <form
          style={{ marginBottom: "20px" }}
          onSubmit={(e) => testLevel1OnSubmit(e)}
        >
          <input
            ref={nameInput}
            className={"textBox"}
            placeholder="Name"
            required
            id="name"
            value={testLevel1.name}
            onChange={(e) => testLevel1HandleChange(e)}
          />
          <input
            id="number"
            value={testLevel1.number}
            onChange={(e) => testLevel1HandleChange(e)}
            className={"textBox"}
            placeholder="Whatsapp Phone Number"
            required
          />
          <div className={classes.title}>
            <span style={{ fontWeight: "bold" }}>Basic Test</span> <br />
            Fill your answers
          </div>
          <div style={{ fontSize: "18px", margin: "20px" }}>
            1) What is your name?
          </div>
          <input
            id="q1"
            value={testLevel1.q1}
            onChange={(e) => testLevel1HandleChange(e)}
            className={"textBox"}
            placeholder="Enter Answers Here"
            required
          />
          <div style={{ fontSize: "18px", margin: "20px" }}>
            2) Do you have any siblings?
          </div>
          <input
            id="q2"
            value={testLevel1.q2}
            onChange={(e) => testLevel1HandleChange(e)}
            className={"textBox"}
            placeholder="Enter Answers Here"
            required
          />
          <div style={{ fontSize: "18px", margin: "20px" }}>
            3) Do you read newspaper every day?
          </div>
          <input
            id="q3"
            value={testLevel1.q3}
            onChange={(e) => testLevel1HandleChange(e)}
            className={"textBox"}
            placeholder="Enter Answers Here"
            required
          />
          <div style={{ fontSize: "18px", margin: "20px" }}>
            4) Did you have your lunch?
          </div>
          <input
            id="q4"
            value={testLevel1.q4}
            onChange={(e) => testLevel1HandleChange(e)}
            className={"textBox"}
            placeholder="Enter Answers Here"
            required
          />
          <div style={{ fontSize: "18px", margin: "20px" }}>
            5) What is your favourite colour?
          </div>
          <input
            id="q5"
            value={testLevel1.q5}
            onChange={(e) => testLevel1HandleChange(e)}
            className={"textBox"}
            placeholder="Enter Answers Here"
            required
          />
          <div style={{ fontSize: "18px", margin: "20px" }}>
            6) What is your hometown famous for?
          </div>
          <input
            id="q6"
            value={testLevel1.q6}
            onChange={(e) => testLevel1HandleChange(e)}
            className={"textBox"}
            placeholder="Enter Answers Here"
            required
          />
          <div style={{ fontSize: "18px", margin: "20px" }}>
            7) Have you visited a farm?
          </div>
          <input
            id="q7"
            value={testLevel1.q7}
            onChange={(e) => testLevel1HandleChange(e)}
            className={"textBox"}
            placeholder="Enter Answers Here"
            required
          />
          <div style={{ fontSize: "18px", margin: "20px" }}>
            8) What is your favourite activity?
          </div>
          <input
            id="q8"
            value={testLevel1.q8}
            onChange={(e) => testLevel1HandleChange(e)}
            className={"textBox"}
            placeholder="Enter Answers Here"
            required
          />
          <div style={{ fontSize: "18px", margin: "20px" }}>
            9) Are you into sports?
          </div>
          <input
            id="q9"
            value={testLevel1.q9}
            onChange={(e) => testLevel1HandleChange(e)}
            className={"textBox"}
            placeholder="Enter Answers Here"
            required
          />
          <div style={{ fontSize: "18px", margin: "20px" }}>
            10) Do you like meeting new people?
          </div>
          <input
            id="q91"
            value={testLevel1.q91}
            onChange={(e) => testLevel1HandleChange(e)}
            className={"textBox"}
            placeholder="Enter Answers Here"
            required
          />
          <br />
          <button className={classes.button}>Submit Answer</button>
        </form>
      )}
      <Link
        to={"/leveltest2"}
        className={classes.mainMenu}
        style={{ fontSize: "17px", fontWeight: "bold" }}
      >
        {"If you feel this simple, Click Here to attend 2nd Level Test >"}
      </Link>
    </div>
  );
}

export default Test1;
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
  mainMenu: {
    marginTop: "20px",
    textDecoration: "none",
    outline: "none",
    fontWeight: "bold",
    cursor: "pointer",
    color: "#171E4B",
    "&:hover": {
      color: "#FF4338",
    },
  },
}));
