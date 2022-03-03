import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {fs} from "../../firebase"
import "./forms.css";

function ContactForm() {
  const classes = useStyles();

  const [contactData, setContactData] = useState({
    name:"",
    number:"",
    email:"",
    message:"",
    date: new Date()
  })
 
  const [contactDataMsg, setContactDataMsg] = useState(false)

  const contactHandleChange = (e) =>{
    const newContactData = {...contactData}
    newContactData[e.target.id] = e.target.value
    setContactData(newContactData);
  }

  const contactOnSubmit = (e) =>{
    e.preventDefault();
    fs.collection('contacts').add(contactData)
    .then((res)=>{
      console.log(res,"success")
      setContactDataMsg(true)
      setContactData()
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div>
      <div className={classes.title}>
        <span style={{ fontWeight: "bold" }}>Message us</span> 
      </div>
     {contactDataMsg? <div className={classes.successMsg}>Thank you we will connect you soon!</div>: <form onSubmit={(e)=>contactOnSubmit(e)}>
        <input
        id="name"
        value={contactData.name}
          className={"textBox"}
          placeholder="Name"
          onChange={(e)=>contactHandleChange(e)}
          required
        />
        <input
        id="number"
        value={contactData.number}
          className={"textBox"}
          placeholder="Phone Number"
          type="number"
          onChange={(e)=>contactHandleChange(e)}
          required
        />
        <input
         id="email"
         value={contactData.email}
          className={"textBox"}
          placeholder="Email"
          type="email"
          onChange={(e)=>contactHandleChange(e)}
          required
        />
        <input
         id="message"
         value={contactData.message}
          className={"textBox"}
          placeholder="Message"
          onChange={(e)=>contactHandleChange(e)}
          required
        />
        
        <br />
        <button className={classes.button}>Submit</button>
      </form>}
     
     
    </div>
  );
}

export default ContactForm;
const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "30px",
    color: "#000",
    marginBottom: "40px",
    marginTop: "40px",
  },
  successMsg: {
    fontSize: "30px",
    color: "#FF4338",
    marginBottom: "40px",
    marginTop: "40px",
  },
  button: {
    backgroundColor: "#FF4338",
    padding: "15px",
    paddingLeft: "30px",
    paddingRight: "30px",
    border: "none",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#000",
    },
  },
}));
