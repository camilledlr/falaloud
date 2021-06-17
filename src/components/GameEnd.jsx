import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';

export default withRouter(function GameEnd ({history, gameIndex, points, clbk, complement}) {
    const quit = () => {
        history.push('/select');
    };
    const replay = () => {
        setIsAnimated(true);
        const again = setTimeout(clbk, 700);
    }
    const displayComment = (points) => {
        if(points > 20) return "Stop showing off ..."
        if(points > 15) return "You just failed at failing"
        if(points > 12) return "You cocky ..."
        if(points > 6) return "Nice try ! ... but try again"
        if(points > 5) return "Not everyone has talent"
        if(points > 4) return "Nice job for a 3 years old"
        if(points > 2) return "I expected nothing ... and I'm still let down"
        return "Epic Fail ..."


    }
    const [isAnimated, setIsAnimated] = useState(false);
    return (
        <div className="end-page">
            {gameIndex ==1 && <div className="end-title"><span>Q</span><span style={{"color":"#B6C40B"}}>&</span><span>A</span></div>}
            {gameIndex ==2 && <div className="end-title"><span>Guess</span><span style={{"color":"#B6C40B"}}>What</span></div>}
            <section className="end-points-comment">
            <div className="mini-replay-container">
            <div className="end-points"><span style={{"color":"#B6C40B"}}>{points}</span><span> &nbsp; points</span></div>
            {complement && <div className="mini-replay-button" onClick={replay}>
                <img className={isAnimated?"rotates":""} width="50%" src="/replay.svg" alt="replay"/>
                <div>Replay</div>
            </div >}
            </div>
            <div className="end-comment">{displayComment(points)}</div>
            </section>
            <section className="end-actions">
            {!complement &&<div className="replay-button" onClick={replay}>
                <img className={isAnimated?"rotates":""} width="30%" src="/replay.svg" alt="replay"/>
                <div>Replay</div>
            </div >
            }
            {complement && <div className="end-complement">
            {complement.map((item) => (

                <div><span>{item.question}</span>{item.isSucess?
                    <img className="icon" width='8%' src="/check.svg" alt=''/>:
                    <img className="icon" width='6%' src="/croix.svg" alt=''/>}</div>
            ))}
            </div> }
            <div className="quit-button" onClick={quit}>
                <img className="" width="5%" src="/cancel.svg" alt="replay"/>
                <div>Quit</div>
            </div>
            </section>
        </div>
    )
})
