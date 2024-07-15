import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter=10
  //useState 
  //here counter is a variable of type let and changecounter is a method that is used to change the value of counter
  let [counter,ChangeCounter]=useState(10)
  const addvalue = ()=>{
    console.log(counter);
    //The value of counter is getting increased but its is not reflecting on the browser i.e technically refered 
    //as Ui updation is not happening and it is purely handled by react 
    //Now one intersting point suppose we have had that counter in all the buttons also and footer then in core js
    //we would have to select all the elements again and again by getelem... and etc which would be very challenging
    //that is solved by react
    //Now if we want to make ui updation we need to make use of hooks 
    //For this we are gonna use UseState hook responsible to change the state of element in the UI and we need 
    //import the hook that we want to use
    counter+=1;
    ChangeCounter(counter)
  }
  const subvalue=()=>{
    if(counter>0)counter=counter-1;
    ChangeCounter(counter);
  }
  return (
    <>
    <h2>Value of Counter is {counter}</h2>
    <button onClick={addvalue}>Add 1 to {counter}</button><br/><br />
    <button onClick={subvalue}>Substract 1 from {counter}</button>
    </>
  )
}

export default App
