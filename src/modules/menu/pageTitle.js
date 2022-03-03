import React from 'react'
import "./menu.css"

function PageTitle(props) {
    return (
        <div className="heroIMG" style={{color:"#fff"}}>
            {props.title}
        </div>
    )
}

export default PageTitle