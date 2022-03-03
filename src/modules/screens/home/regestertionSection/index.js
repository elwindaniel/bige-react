import React, { useRef,useState } from "react";
import { COLORS } from "../../../components/color";
import { TitleText2 } from "../../../components/text";
import { makeStyles } from "@material-ui/core/styles";
import "./regestertion.css";
import { Link } from "react-router-dom";
import { fs } from "../../../../firebase";

export default function RegestertionSection() {
  const classes = useStyles();
  const textInput = useRef(null);
  const [regData, setRegData] = useState({
    course: "basic",
    firstName: "",
    lastName: "",
    number: "",
    email: "",
    address: "",
    date: new Date(),
  });

  const regHandleChange = (e) => {
    const newRegData = { ...regData };
    newRegData[e.target.id] = e.target.value;
    setRegData(newRegData);
  };
  function handleClick() {
    textInput.current.focus();
  }
  function submit(e) {
    console.log(regData,"regData")
    e.preventDefault();
    fs.collection('regestertion').add(regData)
      .then((res) => {
        console.log(res, "success");
        // setContactDataMsg(true)
        // setContactData()
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div
      style={{
        backgroundColor: COLORS.BLUE,
        padding: "20px",
        paddingBottom: "40px",
      }}
    >
      <div style={{ marginTop: "40px", marginBottom: "40px" }}>
        <TitleText2
          text={"Register For a Course"}
          color={COLORS.PRIMARY}
          textAlign={"center"}
        />
      </div>
      <div
        style={{
          fontSize: "18px",
          color: COLORS.PRIMARY,
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Take a Free
        <Link to={"/leveltest"} className={classes.testForm}>
          Level Test for course assesment
        </Link>
      </div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <form className="regBox" onSubmit={submit}>
          <div style={{ display: "flex" }}>
            <button className={classes.buttonWhite} onClick={handleClick}>
              Select Your Course
            </button>
            <select
            id="course"
              ref={textInput}
              type="select"
              // value={regData.course}
              className={classes.buttonWhite}
              onChange={(e) => regHandleChange(e)}
            >
              {/* <option value="basic">Basic</option> */}
              <option value="Academic">Academic</option>
              <option value="General">General</option>
            </select>
          </div>
          <div style={{ display: "flex" }}>
            <input
            id="firstName"
              className={classes.textField}
              onChange={(e) => regHandleChange(e)}
              // value={regData.firstName}
              placeholder="First Name"
              required
            />
            <input
            id="lastName"
              className={classes.textField}
              onChange={(e) => regHandleChange(e)}
              // value={regData.lastName}
              placeholder="Last Name"
              required
            />
          </div>
          <div style={{ display: "flex" }}>
            <input
            id="email"
              className={classes.textField}
              onChange={(e) => regHandleChange(e)}
              // value={regData.email}
              placeholder="Email"
              type="email"
              required
            />
            <input
            id="number"
              className={classes.textField}
              onChange={(e) => regHandleChange(e)}
              // value={regData.number}
              placeholder="Phone Number"
              type="number"
              required
            />
          </div>
          <div style={{ display: "flex" }}>
            <input
            id="address"
              className={classes.textField}
              onChange={(e) => regHandleChange(e)}
              // value={regData.address}
              placeholder="Address"
            />
          </div>
          <div style={{ display: "flex" }}>
            <button className={classes.button}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  textField: {
    backgroundColor: "#fff",
    padding: "15px",
    width: "100%",
    border: "none",
    borderRadius: 4,
    margin: 10,
  },
  button: {
    backgroundColor: "#FF4338",
    padding: "15px",
    width: "100%",
    border: "none",
    color: "#fff",
    borderRadius: 4,
    margin: 10,
    "&:hover": {
      backgroundColor: "#000",
      // color: "#FF4338",
    },
  },
  buttonWhite: {
    textAlign: "left",
    backgroundColor: "#fff",
    padding: "15px",
    width: "100%",
    border: "none",
    borderRadius: 4,
    margin: 10,
    fontWeight: "bold",
    color: "#FF4338",
    "&:hover": {
      backgroundColor: "#FF4338",
      color: "#fff",
    },
  },
  testForm: {
    textDecoration: "none",
    cursor: "pointer",
    marginLeft: "5px",
    fontWeight: "bold",
    color: "#fff",
    "&:hover": {
      color: "#FF4338",
    },
  },
}));
