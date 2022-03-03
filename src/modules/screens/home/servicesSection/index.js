import React from "react";
import Container from "@material-ui/core/Container";
import AppCard from "../../../components/card";
import { TitleText, TitleText2 } from "../../../components/text";
import { COLORS } from "../../../components/color";
import ssImg_1 from "../../../../assets/ss.png";
import ssImg_2 from "../../../../assets/ss-1.png";
import ssImg_3 from "../../../../assets/ss-2.png";
import ssImg_4 from "../../../../assets/ss-3.png";
import ssImg_5 from "../../../../assets/ss-4.png";
import ssImg_6 from "../../../../assets/ss-5.png";

function ServiceSection() {
  return (
    <Container maxWidth="md" style={{ padding: "20px" }}>
      <TitleText
        text={"Services For All Age"}
        color={COLORS.BLACK}
        textAlign={"center"}
      />
      <TitleText2
        text={"We Love To Help People To"}
        text1={"Improve"}
        text2={"Their English"}
        textAlign={"center"}
        color={COLORS.BLUE}
        color_2={COLORS.SECONDARY}
      />
      <div>
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly', textAlign:"center", }}>
        {ss.map((i,index)=><AppCard key={index} title={i.title} img={i.img} body={i.body}/>)}
        </div>
          
        
      </div>
    </Container>
  );
}

export default ServiceSection;

const ss = [
  {
    title: "Listening", 
    img: ssImg_1 , 
    body: "vocabulary, listening comprehension skills, note-taking"
  },
  {
    title: "Speaking", 
    img: ssImg_2, 
    body: "vocabulary, listening comprehension skills, note-taking"
  },
  {
    title: "Reading", 
    img: ssImg_3, 
    body: "vocabulary, listening comprehension skills, note-taking"
  },
  {
    title: "Writing", 
    img: ssImg_4, 
    body: "vocabulary, listening comprehension skills, note-taking"
  },
  {
    title: "Grammar", 
    img: ssImg_5, 
    body: "vocabulary, listening comprehension skills, note-taking"
  },
  {
    title: "Join Now", 
    img: ssImg_6, 
    body: "improve your english skills"
  },
]
