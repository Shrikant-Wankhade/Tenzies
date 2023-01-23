
import React, {useEffect} from "react"

export default function Dice({value,IsHeld,hold}) {

    let className = "dice--face"
    if(IsHeld){
        className = className + " background--active"
    }

    
    return (
        <div className={className} onClick={hold}>
            <h2 className="dice-num">{value}</h2>
        </div>
    )
}