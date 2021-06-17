import React from 'react';
import GamePage from "../components/GamePage";


export default function GuessWhat() {
    return (
        <>
            <GamePage title={"Guess What"} icon="question.svg" link="guesswhat/play">Un participant tire un mot au hasard et doit le faire deviner avec des phrases à son partenaire. <br /><span style={{"font-weight": "bold"}}> Plus vous trouvez vite, plus vous gagnez de points ! So hurry up </span></GamePage>
        </>
    )
}
