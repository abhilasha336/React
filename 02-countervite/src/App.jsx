import { useState } from 'react'

import './App.css'

function App() {
/*var counter=0
  function addValue(){
    counter=counter+1
    console.log(counter);
  }*/

 const [counter,setCounter]=useState(0)  //useState  returns counter and mechanism function which does count
  function addValue(){
    setCounter(counter+1) //setCounter is the mechaniosm function which does count+1
  }

  function subValue(){
    setCounter(counter-1) //setCounter is the mechaniosm function which does count+1
  }

  /*function add3Value(){ //here will not update beacause batching occurs considered as single,only one time value recive from useState(0)'s counter variable
    setCounter(counter+1)
    setCounter(counter+1)//beacuse here is no callback ,call back waits and bring value from useState(0)'s counter variable
    setCounter(counter+1)
    setCounter(counter+1)
  }*/


  function add3Value(){ //use seperate callback for avoiding batching which recieves count value from useState(0) each times
    setCounter((countsFromuseState)=>countsFromuseState+1 )
    setCounter((countsFromuseState)=>countsFromuseState+1 )
    setCounter((countsFromuseState)=>countsFromuseState+1 )


  }

  function reset(){
  
    setCounter(counter-counter)
  }
  return (
    <>
     <h1>This is react course by Hithesh sir {counter} </h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={addValue}>Add Value click</button>{" "}
     <button onClick={subValue}>Subtract  Value click</button>{" "}
     <button onClick={add3Value}>Add by 3 values</button>{" "}
     <button onClick={reset}>Reset</button>


    </>
  )
}

export default App
