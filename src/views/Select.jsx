import React from 'react';
import Slider from "../components/Slider";


export default function Select() {
    return (
        <div className="PageCenter">
        <section className="titles">
            <img width="60%" src="/logo.png" alt="falaloud logo"/>
            <div className="text">Choose an <span style={{"fontWeight" : "bold"}}>activity</span></div>
            </section>
            <Slider/>
        </div>
    )
}
