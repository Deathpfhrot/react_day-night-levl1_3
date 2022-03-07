import React, { useState } from "react"
import './dayNight.css'

const DayNight = () =>{
    const [isDay, setDay] = useState(true)

    const day = () => setDay(!isDay)

    return(
        <div className= {`dayTime ${isDay ? "day" : "night"}`}>
            <h1>Es ist {isDay ? "Tag!☀️" : "Nacht!🌑"}</h1>
            <button onClick={day}>Change to: {isDay ? "Nacht" : "Tag"}</button>
        </div>
    )
}

export default DayNight