import React from 'react'
import "./textStyle.css"

export  function WelcomeText(props) {
     const {text, color, fontWeight} = props
    return (
        <div className="welcomeText" style={{color:color, fontWeight:fontWeight}}>
            {text}
        </div>
    )
}

export  function TitleText(props) {
     const {text, color, fontWeight, textAlign} = props
    return (
        <div className="TitleText"  style={{color:color, fontWeight:fontWeight , textAlign:textAlign}}>
            {text}
        </div>
    )
}
export  function TitleText2(props) {
     const {text, color, fontWeight,textAlign,color_2,text1,text2} = props
    return (
        <div className="TitleText2" style={{color:color, fontWeight:fontWeight,textAlign:textAlign}}>
            {text}<span  style={{color:color_2}}> {text1}</span> {text2}
        </div>
    )
}
export  function TitleText3(props) {
     const {text, color, fontWeight,textAlign,} = props
    return (
        <div className="TitleText3" style={{color:color, fontWeight:fontWeight,textAlign:textAlign}}>
            {text}
        </div>
    )
}

export  function BodyText(props) {
    const {text, color, fontWeight,textAlign} = props
    return (
        <div className="bodyText" style={{color:color, fontWeight:fontWeight,textAlign:textAlign}}>
            {text}
        </div>
    )
}


