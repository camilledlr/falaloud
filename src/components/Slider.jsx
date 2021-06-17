import React from 'react';
import SelectBox from "../components/SelectBox";

export default function Slider() {
    return (
        <div className='slider'>
           <SelectBox title="Q&A" image="/light-bulb.svg" link="q&a">Les participants tirent un sujet/question au hasard et doivent en parler/ répondre pendant 3 minutes</SelectBox>
            <SelectBox title="Guess What" image="/question.svg" link="guesswhat">Un participant tire un mot au hasard et doit le faire deviner avec des phrases à son partenaire. </SelectBox> 
        </div>
    )
}
