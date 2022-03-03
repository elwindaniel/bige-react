import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/logo.svg";
import { Facebook, Instagram, YouTube, Menu, Close } from "@material-ui/icons";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link } from "react-router-dom";

export default function Header(props) {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");
  const [menuOpen, setMenuOpen] = useState(false);
  // const home = () => {
  //   props.history.push("/");
  // };
  return (
    <div className={classes.header}>
      <Link to={"/"}>
        <img
          style={{ height: "70px", zIndex: 2, marginLeft: "50px" }}
          src={logo}
          alt="logo"
        />
      </Link>
      <div style={{ display: matches ? "flex" : "none", marginTop: "15px" }}>
        {mainMenu.map((menu, index) => (
          <div className={classes.menu} key={index}>
            <Link to={menu.link} className={classes.mainMenu}>
              {menu.nameMenu}
            </Link>
          </div>
        ))}
      </div>
      <div
        style={{
          display: matches ? "flex" : "none",
          marginTop: "15px",
          marginRight: "50px",
        }}
      >
        {socialMedia.map((menu, index) => (
          <div className={classes.menu} key={index} onClick={()=> {window.open(menu.link, "")}}>
            <Link  className={classes.mainMenu}>
              {menu.nameMenu}
            </Link>
          </div>
        ))}
      </div>
      <div
        style={{
          display: matches ? "none" : "",
          marginTop: "20px",
          marginRight: "15px",
          textAlign: "right",
        }}
      >
        {menuOpen ? (
          <Close onClick={() => setMenuOpen(false)} />
        ) : (
          <Menu onClick={() => setMenuOpen(true)} />
        )}
        <div style={{ display: menuOpen ? "" : "none", marginTop: "15px" }}>
          {mainMenu.map((menu, index) => (
            <div className={classes.menu} key={index}>
              <Link
                to={menu.link}
                className={classes.mainMenu}
                onClick={() => setMenuOpen(false)}
              >
                {menu.nameMenu}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const mainMenu = [
  {
    nameMenu: "Home",
    link: "/",
  },
  {
    nameMenu: "About",
    link: "/about",
  },
  {
    nameMenu: "Blog",
    link: "/blog",
  },
  {
    nameMenu: "Level Test",
    link: "/leveltest",
  },
  {
    nameMenu: "Testimonials",
    link: "/testimonials",
  },
  {
    nameMenu: "Contact",
    link: "/contact",
  },
];
const socialMedia = [
  // {
  //   nameMenu: <Facebook />,
   
  // },
  {
    nameMenu: <Instagram />,
    link:"https://www.instagram.com/bigeacademy"
  },
  // {
  //   nameMenu: <YouTube />,
  // },
];

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    backgroundColor: "#fff",

    justifyContent: "space-between",
  },
  menu: {
    color: "#171E4B",
    padding: "10px",
  },
  mainMenu: {
    textDecoration: "none",
    outline: "none",
    fontWeight: "bold",
    cursor: "pointer",
    color: "#171E4B",
    "&:hover": {
      color: "#FF4338",
    },
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
