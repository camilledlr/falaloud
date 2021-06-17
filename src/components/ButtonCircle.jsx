import React from 'react'

export default function ButtonCircle({icone, clbk, text}) {
    return (
        <div>
            <div className="forward-button" onClick={clbk}>
            <img className="icon" width="35%" src={`/${icone}.svg`} alt={icone}/>
            </div>
            <div className="forward-button-text">{text}</div>
            </div>
    )
}
