import React from 'react'
import { Link, withRouter } from "react-router-dom";

export default function SelectBox({title, image, children, link}) {
    return (
        <Link to={"/"+link}>
        <div className="select-box">
            <div className="select-title-icon">
            <div className="select-title">{title}</div>
            <img className="icon" width="30%" src={image} alt="falaloud logo"/>
            </div>
            
            {children}
        </div>
        </Link>
    )
}
