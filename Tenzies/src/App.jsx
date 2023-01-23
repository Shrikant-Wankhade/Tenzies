import React, { useState } from 'react'
import Dice from "./components/dices"
import Confetti from "react-confetti"
import { nanoid } from 'nanoid'

export default function App() {

  const [dice, setDice] = useState(setAllDice());
  const [game, setGame] = useState(false);
  const [tries, setTries] = useState(0);

  function randomNum(){
    return Math.floor(Math.random() * 6) + 1;
  }

  React.useEffect(()=>{
        const allHeld = dice.filter(die=>{
          if(die.IsHeld === true){
            return die
          }
        });
        const firstValue = dice[0].value

        const allValuesSame = dice.filter(die=>{
          return (die.value === firstValue)
        })

        if(allHeld.length === 10 && allValuesSame.length === 10){
          setGame(true)
          console.log(`You Won! and took ${tries} tries`)
        }

    },[dice])


  function setAllDice(){
    const items = []
      for(let i=0; i<10; i++){
        const newItem = {
          id: nanoid(),
          value: randomNum(),
          IsHeld:false
        }
        items.push(newItem);
      }
    return items
  }

  function rollUp(){
    setDice(
      dice.map(die=>{
        if(die.IsHeld){
          return die
        }else{
          return {...die, value: randomNum()}
        }
      })
    )
    //each time we roll up, increase a try
    setTries(prevTries=>prevTries+1)
    console.log(tries);

    if(game){
      setGame(false);
      setDice(setAllDice);
    }
  } 

  function handleHold(currentId){
    setDice(
      dice.map(die=>{
        if(die.id === currentId){
          return {
            ...die, IsHeld: !die.IsHeld
          }
        }else{
          return die
        }
      })
    )
  }

  const diceElements = dice.map(die=>{
    return (
      <Dice 
        key={die.id}
        id={die.id} 
        value={die.value}
        IsHeld={die.IsHeld}
        hold={()=>handleHold(die.id) }
      />
    )
  })

  return (
    <div className="background__board">
      <div className="main__board">
            {game && <Confetti 
                        width={320}
                        height={320}
                      />}
            <div className="main__board__content__text">
                  <h2 className='heading'>Tenzies</h2>
                  <p className='desc'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            </div>
            <div>
            </div>
            <div className="main__board__content--dice">
                  {diceElements}
            </div>
            {game && <div className='tries'><h4>{`You took ${tries} tries`}</h4></div>}
            <button className='button' onClick={rollUp}>
                {game ? "Reset Game" : "Roll Up"}
            </button>
      </div>
    </div>
  )
 
}

