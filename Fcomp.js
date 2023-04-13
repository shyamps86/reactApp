import React from 'react';
import { CounterContext } from './CounterContext';
import { useContext } from 'react';
const Fcomp=()=>{
    const {count,setCount}= useContext(CounterContext)
    return(
        <div>
            <h1>functional component</h1>
           <button onClick={()=>setCount(count+1)}>increment</button> <br />
           {count}
           < Fchild />
        </div>
    )
}

const Fchild=()=>{
    const {count,setCount}= useContext(CounterContext)
    return(
        <div>
            <h1>child functional component</h1>
            <button onClick={()=>setCount(count-1)}>decrement</button>
            <h2>{count}</h2>
        </div>
    )
}
export default Fcomp;