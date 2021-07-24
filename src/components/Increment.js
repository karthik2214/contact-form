import React, { useReducer, useEffect } from 'react'

const Increment = () => {

    const reducer = (state, action) => {
        if (action.type === "INCR") {
            state = state + 1;
        }
        if (state > 0 && action.type === "DECR") {
            state = state - 1;
        }
        return state;
    }
    const initalData = 0
    const [state, dispatch] = useReducer(reducer, initalData);

    // useEffect(() => {
    //     document.title = `Chats (${state})`; 7450e1534517642757676a1d1e064739 api.openweathermap.org/data/2.5/weather?q=mumbai&appid=7450e1534517642757676a1d1e064739
    // })

    return (
        <>
            <div className="center-div">
                <p>{state}</p>
                <button className="btn" onClick={() => dispatch({type: "INCR"})}>INCR</button>
                <button className="btn" onClick={() => dispatch({type: "DECR"})}>DECR</button>
            </div>
        </>
    )
}

export default Increment
