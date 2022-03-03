import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {fs} from "../../firebase"
function Newsletter(props) {
  const classes = useStyles();

  const [newsLetterData, setNewsLetterData] = useState({
    email:"",
    date: new Date()
  })

  // const [newsletterMsg, setnewsLetterDataMsg] = useState(false)

  const newsLetterHandleChange = (e) =>{
    setNewsLetterData({emal: e.target.value});
  }

  const newsLetterOnSubmit = (e) =>{
    e.preventDefault();
    fs.collection('newsLetter').add(newsLetterData)
    .then((res)=>{
      console.log(res,"success")
      setNewsLetterData()
      props.newsLetter(true)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div>
      <div
        style={{
          fontWeight: "bold",
          color: "#fff",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Subscribe to our newsletter
      </div>
      <form style={{ display: "flex" }} onSubmit={(e)=>newsLetterOnSubmit(e)}>
        <input className={classes.textField} placeholder="Email" required onChange={(e)=>newsLetterHandleChange(e)}/>
        <button className={classes.button}>Subscribe</button>
      </form>
    </div>
  );
}

export default Newsletter;

const useStyles = makeStyles((theme) => ({
  emailPopup: {
    backgroundColor: "#171E4B",
    padding: "15px",
    paddingBottom: "25px",
  },
  textField: {
    backgroundColor: "#fff",
    padding: "5px",
    border: "none",
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
}));
