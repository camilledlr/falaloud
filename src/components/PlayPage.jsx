import React from 'react';
import Chrono from "../components/Chrono";
import QAPoints from "../components/QAPoints";
import ButtonCircle from "../components/ButtonCircle";
import PlayAction from "../components/PlayAction";

export default function PlayPage({question, pts, time, questionCount, actions, clbk1, clbk2}) {
    return (
            <div className="gamepage">
             <section className="game-header" >
                <div className="qa-question">{question}</div>
                <div className="qa-question-count">{questionCount}/5</div>
            </section>
           <QAPoints>{pts}</QAPoints>
            <section className='game-infos'>
            <Chrono counter={time}></Chrono>
            <section> 
            {actions.length ==1 && <ButtonCircle icone='forward-button' text="Next"></ButtonCircle>}
            {actions.length ==2 && (
            <div className="actions"><PlayAction icone="croix" text={actions[0]} color="#C4370B" size="75%" clbk={clbk1}/> <PlayAction icone="check" text={actions[1]} color="#B6C40B" size="95%" clbk={clbk2}/></div>
            )
            }
            </section>
            </section>
        </div>
    )
}
