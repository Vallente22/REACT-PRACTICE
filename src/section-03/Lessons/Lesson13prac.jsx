import React from "react";

const Lesson13prac = () => {
  const [count, setCount] = React.useState(0)

  const minus = () =>{
    setCount(prevCount => prevCount - 1)
  }

  const plus = () =>{
    setCount(prevCount => prevCount + 1)
  }

  const [click, setClick] = React.useState(0)

  const clickCounter = () => {
    setClick(click + 1)
  }
  
  const [score, setScore] = React.useState(10)

  const plusFive = () => {
    setScore(prevScore =>  prevScore + 5)
  }

  const minusFive = () => {
    setScore(prevScore => prevScore - 5)
  }

  const [temperature, setTemperature] = React.useState(25)

  const warmTemp = () => {
    setTemperature(prevTemp => prevTemp + 1)
  }
  
  const coldTemp = () => {
    setTemperature(prevTemp => prevTemp - 1)
  }

  const [heartNumber, setHeartNumber] = React.useState(3)

  const loseLife = () => {
    if (heartNumber > 0) setHeartNumber(prev => prev - 1);
  }
  
  const gainLife = () => {
    setHeartNumber(prevHeartCount => prevHeartCount + 1)
  }

  const [money, setMoney] = React.useState(100)

  const earn = () => {
    setMoney(prevMoney => prevMoney + 50)
  }

  const spend = () => {
    if (money > 10) setMoney(prevMoney => prevMoney - 20)
  }

  const [counter, setCounter] = React.useState(0)

  const incre = () => {
    setCounter(prev => prev + 1)
  }
  const decre = () => {
    setCounter(prev => prev - 1)
  }
  const reset = () => {
    setCounter(prev => prev = 0)
  }  



  return(
    <>
      <h1>how many times will Bob say "state" in this section?</h1>
      <button onClick={minus}>-</button>
      <h1>{count}</h1>
      <button onClick={plus}>+</button>
      <hr />
      <h1>You've clicked {click} times</h1>
      <button onClick={clickCounter}>Click me</button>
      <hr />
      <h1>Score: {score}</h1>
      <button onClick={plusFive}>+5</button>
      <button onClick={minusFive}>-5</button>
      <hr />
      <h1>Temperature {temperature}°C</h1>
      <button onClick={warmTemp}>Warmer</button>
      <button onClick={coldTemp}>Colder</button>
      <hr />
      <h1>Lives: {"❤️".repeat(heartNumber)}</h1>
      <h1>Lives: {heartNumber}</h1>
      <button onClick={loseLife}>Lose Life</button>
      <button onClick={gainLife}>Gain Life</button>
      <hr />
      <h1>Money: ₱{money}</h1>
      <button onClick={earn}>Earn ₱50</button>
      <button onClick={spend}>Spend ₱20</button>
      <hr />
      <h1>Counter: {counter}</h1>
      <button onClick={incre}>+</button>
      <button onClick={decre}>-</button>
      <button onClick={reset}>Reset</button>
      
    </>
  )
}

export default Lesson13prac;