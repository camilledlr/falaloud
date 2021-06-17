import React from 'react'

export default function QAPoints({children}) {
    return (
        <>
            <div className='qa-points'>
            <div className='qa-points'>
            <img className="icon" width="4%" src="/star.svg" alt="star"/>
            <span style={{"fontWeight" : "bold"}}>{children}</span>    pts
            </div>
            </div>
        </>
    )
}
