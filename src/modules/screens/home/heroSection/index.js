import React from "react";
import "./hero.css";
import Grid from "@material-ui/core/Grid";
import WelcomeImg from "../../../../assets/welcomeImg.png";
import { WelcomeText } from "../../../components/text";
import AppButton from "../../../components/button";
import { COLORS } from "../../../components/color";

export default function Hero() {
  return (
    <div className="hero">
				<div className="hero_overlay ">
      <Grid container style={{padding:"20px"}} >
        <Grid item sm={6} xs={12} style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
          <WelcomeText
            text={"Minimising the gap between you and your dreams"}
            color={COLORS.PRIMARY}
          />
          <br />
          {/* <AppButton
            text={"Register for Course Now"}
            color={COLORS.PRIMARY}
            backgroundColor={COLORS.SECONDARY}
          /> */}
        </Grid>
        <Grid item sm={6} xs={12}>
				<div className="hreo_img">
				<img width="512" height="603" src={WelcomeImg} alt="welcome"/></div>
				</Grid>
      </Grid>
    </div>
		</div>
  );
}
