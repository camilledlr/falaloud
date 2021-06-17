import React, { useState, useEffect } from 'react';
import Chrono from "../components/Chrono";
import QAPoints from "../components/QAPoints";
import GameEnd from "../components/GameEnd";

export default function PlayQA() {
    const [questionsList, setQuestionsList] = useState(["What book are you currently reading","What did you do during lock down ?", "Are you happy ? What is hapiness for you ?", "What's your relationship with your credit card ?", "Could you leave your parents in a retirement home ?", "What apps do you use most on your smartphone ?", "What's your favorite way of travelling ?", "Do you prefer on-line or face-to-face classes ?", "What's the best lesson you received from your parents ?", "What's your favorite movie ?", "Do you prefer spending money buying things or experiences ?", "Are you an optimistic person ?" ]);
    const [randomNumber, setRandomNumber] = useState(null);
    const [countQuestion, setCountQuestion] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [pts, setPts] = useState(0);
    const [counter, setCounter] = useState(0);

    const replay = () => {
        setIsPlaying(true);
        setCountQuestion(0);
        setPts(0);
        setCounter (0);
        setQuestionsList(["What book are you currently reading","What did you do during lock down ?", "Are you happy ? What is hapiness for you ?", "What's your relationship with your credit card ?", "Could you leave your parents in a retirement home ?", "What apps do you use most on your smartphone ?", "What's your favorite way of travelling ?", "Do you prefer on-line or face-to-face classes ?", "What's the best lesson you received from your parents ?", "What's your favorite movie ?", "Do you prefer spending money buying things or experiences ?", "Are you an optimistic person ?" ])
    }
    const timer = () => {
        const newCounter = counter + 1
        setCounter (newCounter)
    }
    const initChrono = ()=>{
        setCounter (0)
    }
    const selectQuestion = () => {
        const random = Math.floor(Math.random() * (questionsList.length - 1))
        setRandomNumber(random);
        let newList = questionsList
        questionsList.splice(randomNumber, 1);
        setQuestionsList (newList)
     }
    const calculPts = () => {
        const newPts = Math.round(counter/10)/2;
        setPts(pts+newPts)
     }
    const nextQuestion = () => {
        if (countQuestion==5) setIsPlaying (false)
        selectQuestion();
        initChrono();
        calculPts();
        setCountQuestion(countQuestion + 1)
        
     }
     useEffect(() => {
        selectQuestion();
    }, []);

     useEffect(() => {
        const interval = setInterval(timer, 1000);
  return () => clearInterval(interval);
    }, [counter]);
    if (randomNumber==null) return <div>loading</div>
    if (isPlaying) return (
        <div className="gamepage">
             <section className="game-header" >
                <div className="qa-question">{questionsList[randomNumber]}</div>
                <div className="qa-question-count">{countQuestion}/5</div>
            </section>
           <QAPoints>{pts}</QAPoints>
            <section className='game-infos'>
            <Chrono counter={counter}></Chrono>
            <div>
            <div className="forward-button" onClick={nextQuestion}>
            <img className="icon" width="35%" src="/forward-button.svg" alt="play"/>
            </div>
            <div className="forward-button-text">{countQuestion==5?"Finish":"Next"}</div>
            </div>
            </section>
        </div>
    )
    if (!isPlaying) return (
        <GameEnd gameIndex={1} points={pts} clbk={replay}/>
    )
}
