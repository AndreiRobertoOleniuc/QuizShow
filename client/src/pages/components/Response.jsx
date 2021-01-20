import React from 'react'

const Response = ({ res, changeState, style }) => {
    return (
        <div className={`res ${style}`}>
            <h1>{res}!!!</h1>
            <button onClick={changeState}>Weiter</button>
        </div>
    )
}

export default Response
