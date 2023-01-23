import React, { useState } from 'react'

export default function App() {

  return (
    <div className="background__board">
      <div className="main__board">
            <div className="main__board__content__text">
                  <h2 className='heading'>Tenzies</h2>
                  <p className='desc'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            </div>
            <div>
            </div>
            <div className="main__board__content--dice">
                      <div className="dice--face"><h2 className="dice-num">1</h2></div>
                      <div className="dice--face"><h2 className="dice-num">1</h2></div>
                      <div className="dice--face"><h2 className="dice-num">1</h2></div>
                      <div className="dice--face"><h2 className="dice-num">1</h2></div>
                      <div className="dice--face"><h2 className="dice-num">1</h2></div>
                      <div className="dice--face"><h2 className="dice-num">1</h2></div>
                      <div className="dice--face"><h2 className="dice-num">1</h2></div>
                      <div className="dice--face"><h2 className="dice-num">1</h2></div>
                      <div className="dice--face"><h2 className="dice-num">1</h2></div>
                      <div className="dice--face"><h2 className="dice-num" >1</h2></div>
            </div>
            <button className='button'>
                Roll
            </button>
      </div>
    </div>
  )
 
}

