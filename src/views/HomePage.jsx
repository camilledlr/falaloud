import React from 'react';
import { Link, withRouter } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="PageCenter">
            <section className="titles">
                <img width="75%" src="/logo.png" alt="falaloud logo"/>
                <div className="text">Learn Loud and Clear</div>
            </section>
            <Link to="/select">
            <div className="button"><div>Start A Game</div></div>
            </Link>
        </div>
    )
}
