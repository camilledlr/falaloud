import React, {useState, useEffect} from 'react';
import GameEnd from "../components/GameEnd";
import PlayPage from "../components/PlayPage";

export default function PlayGW() {
    const [questionsList, setQuestionsList] = useState(["Band-aid (n)","to repel (sth)", "to shrink (v)", "to screw (v)", "to pour (v)", "to thrive (v)", "get worse (expr)"]);
    const [doneList, setDoneList]= useState([]);
    const [randomNumber, setRandomNumber] = useState(null);
    const [countQuestion, setCountQuestion] = useState(1);
    const [isPlaying, setIsPlaying] = useState(true);
    const [pts, setPts] = useState(0);
    const [counter, setCounter] = useState(0);
    const replay = () => {
        setIsPlaying(true);
        setCountQuestion(1);
        setPts(0);
        setCounter (0);
        setDoneList([])
        setQuestionsList(["Band-aid (n)","to repel(n)", "to shrink (v)", "to screw (v)", "to pour (v)", "to thrive (v)", "get worse (expr)", "clumsy (adj)", "to starve (v)", "a gambler (n)","conspicuous (adj)", "too close to call (expr)", "a shortcoming (n)", 'to shun (v)', "a backlash (n)", "From craddle to grave (expr)", 'unintentionnally (adv)', 'bittersweet (adj)', 'to shoulder (v)', 'to pull the plug (expr)', "a census","There is nothing to write home about (expr)", "gambling (n)", "red tape (expr)", "The more, the merrier (expr)", "The bread and butter (of sb)" ])
    }
    const timer = () => {
        const newCounter = counter + 1
        setCounter (newCounter)
    }
    const next = () => {
        if (countQuestion==5) {
            setIsPlaying (false)
        }
        changeList();
        selectQuestion();
        initChrono();
        setCountQuestion(countQuestion + 1)
    }

    const recordSucess = (perf) => {
        setDoneList([...doneList, {question : questionsList[randomNumber], isSucess :perf }]);
    }
    const skip = () => {
        recordSucess(false);
        next();
    }
    const guess = () => {
        recordSucess(true);
        next();
        calculPts();
    }

    const initChrono = ()=>{
        setCounter (0)
    }

    const calculPts = () => {
        const newPts = Math.round(100/counter)/2;
        setPts(pts+newPts)
     }
    useEffect(() => {
        const interval = setInterval(timer, 1000);
  return () => clearInterval(interval);
    }, [counter]);
    useEffect(() => {
        selectQuestion();
    }, []);

    const selectQuestion = () => {
        const random = Math.floor(Math.random() * (questionsList.length - 1));
        setRandomNumber(random);
     }
     const changeList = () => {
         let newList = questionsList
         questionsList.splice(randomNumber, 1);
        setQuestionsList (newList)
     }
     if (!isPlaying) return (
        <GameEnd gameIndex={2} points={pts} clbk={replay} complement={doneList}/>
    )
    return (
        
        <PlayPage question={questionsList[randomNumber]} pts={pts} time={counter} questionCount={countQuestion} actions={["Too Hard", "Guessed"]} clbk1={skip} clbk2={guess}/>
    )
}
