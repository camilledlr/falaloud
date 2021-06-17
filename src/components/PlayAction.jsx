import React from 'react'

export default function PlayAction({icone, text, color, size, clbk}) {
    return (
        <div className='play-action' onClick={clbk}>
            <img className="icon" width={size} src={`/${icone}.svg`} alt={icone}/>
            <div style={{"color" : color}}>{text}</div>
        </div>
    )
}
