import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import {useCallback, useState,useMemo} from 'react'
import Counterm from './Counterm';

function App() {
  const [COunter,setCount]=useState(0)
  const Myarray=useMemo(()=> ["a","b","c","d"],[])  

  const increment=useCallback(()=>{setCount((CurrentCounter)=> CurrentCounter+1)},[setCount])
  // this.setState((currentState)=>currentState+1)
  

  return (
    <div >
      <h1>{COunter}</h1>
      {/* while writing anonymously in all render function create   */}

     {/* <Counter increment ={increment}/> */}
<button onClick={increment}>add</button>
     <Counterm Myarray={Myarray}/>
    </div>
  );
}

export default App;
