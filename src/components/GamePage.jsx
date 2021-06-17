import React from 'react';
import { Link, withRouter } from "react-router-dom";

export default function GamePage({title,link,icon,children}) {
 
    return (
        <div className='gamepage'>
            <section className="game-header" >
                <div className="game-title">{title == "Guess What" && <><span>Guess</span><br /><span style={{"color" :"#B6C40B"}}>What</span></>}</div>
                <div className="game-title">{title == "Q&A" && <><span>Q</span><span style={{"color" :"#B6C40B"}}>&</span>A</>}</div>
                <Link to={"/"+link}>
                <div className="play-button">
                    <img className="icon" width="35%" src="/play-button-arrowhead.svg" alt="play"/>
                </div>
                </Link>
            </section>
            <section className="game-infos">
                <img className="icon" width="30%" src={"/"+icon} alt="play"/>
                <div className="text">{children}</div>
            </section>
        </div>
    )
}
