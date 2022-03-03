import React from 'react'
import "./btnStyle.css"

function AppButton(props) {
    const {text, color, backgroundColor, onClick} = props
    return (
        <button className="hero_btn" style={{color:color, backgroundColor:backgroundColor}} onClick={onClick}>
            {text}
        </button>

    )
}

export default AppButton
