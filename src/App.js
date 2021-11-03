import React ,{useState}from 'react';
import './App.css';


const  App=()=> {
 
  const [count, setcount] = useState(10);

const IncNum =()=>{
  setcount(count+1);
};


  return (
    <>
    <h1> {count} </h1>
    <button onClick={IncNum}>Click Me Here</button>
    </>


  )
};

export default App;
