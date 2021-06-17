import React, { useState, useEffect } from 'react'

export default function Chrono({counter}) {
   
    return (
        <div className="chrono-frame">
            <span>{counter/60 < 10 ? "0": Math.trunc(counter/60).toString()[0]}</span>
            <span>{counter/60 < 10 ? Math.trunc(counter/60): Math.trunc(counter/60).toString()[1]}</span> :
            <span>{counter%60 < 10 ? "0": Math.trunc(counter%60).toString()[0]}</span>
            <span>{counter%60 < 10 ? Math.trunc(counter%60): Math.trunc(counter%60).toString()[1]}</span>
        </div>
    )
}
