import React,{useState, useEffect} from 'react'
import Hero from './heroSection'
import ServiceSection from './servicesSection'
import TestimonySection from './testimonySection'
import RegestertionSection from './regestertionSection'
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from "@material-ui/core/styles";
import Newsletter from "../../forms/newsletter"

export default function Home() {
    const classes = useStyles();

    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
      };
    const newsLetter = () => {
        setOpen(false)
      };

      useEffect(() => {
        setTimeout(function(){ setOpen(true) }, 5000);
      }, [])


    return (
        <div>
            <Hero />
            <ServiceSection />
            <TestimonySection />
            <RegestertionSection />
            <Dialog
                onClose={handleClose} 
                aria-labelledby="simple-dialog-title" open={open}>
               <div className={classes.emailPopup}>
                  <Newsletter newsLetter={(res)=>newsLetter(res)}/>
               </div>


            </Dialog>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    emailPopup: {
        backgroundColor: "#171E4B",
        padding: "15px",
       paddingBottom:"25px"
    },
    

}));

