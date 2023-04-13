// // import React, {useState,useEffect} from 'react'
// // import axios from 'axios'
// import React from 'react'
// import Loose from './navbar';
// import { BrowserRouter,Switch, Route } from 'react-router-dom'
// import home from './home';
// import dashboard from './dashboard';
// import about from './about';

// const App = () => {
//   // const [data,setData]=useState([]);
//   // useEffect(()=>{
//   //   axios.get("https://jsonplaceholder.typicode.com/todos").then(response =>setData(response))
//   // },[])

//   // return (
//   //   <div>
//   //     {
//   //     data.map(item => <li key={item.id}>{item.completed}</li>)
//   //     }
//   //   </div>
//   // )
//   return(
//     <div>
//       <BrowserRouter>
//     <switch>
//       <loose />
//       </switch>
//     </BrowserRouter>
//     </div>
//   )
//   }
// export default App


// import React from 'react';
// import { useState,useReducer } from 'react';
// var intialValue=0;

// function reducer(state,action){
//   // eslint-disable-next-line default-case
//   switch(action.type){
//     case "increment":
//       return state+1;
//     case "decrement":
//       return state-1;
//     default:
//       throw new Error();
//   }
// }

// export const App = () => {
//   //const[counter,setCounter]=useState(0);
//   const[state,dispatch] =useReducer(reducer,intialValue);
//   return (
//     <div>
//       <h1>this is example of mapreducer hook</h1>
//       <h2>{state}</h2>
//       <button onClick={()=> dispatch({type:"increment"})}>increment</button>
//       <button onClick={()=> dispatch({type:"decrement"})}>decrement</button>
//     </div>
//   );
// }
// export default App


// import React from 'react';
// import { useState,useReducer } from 'react';

// var intialValue=[{id:Date.now(),name:"shyam",email:"shyam@gmail.com"}];

// function reducer(state,action){
//   // eslint-disable-next-line default-case
//   switch(action.type){
//     case "add":
//       return [...state, action.payload];
//     case "delete":
//       return state.filter( (contact) => contact.id !== action.payload.id );
//     default:
//       throw new Error();
//   }
// }


// function App() {
//   //const[counter,setCounter]=useState(0);
//   const[state,dispatch] =useReducer(reducer,intialValue);
//   console.log(state);
//   const [name,setName]=useState("");
//   const [email,setEmail]=useState("");
//   function addContact(e){
//     e.preventDefault();
//     var contact={
//      id:Date.now(),
//      name,
//      email,
//     }
//     setName("");
//     setEmail("");
//     dispatch({action:"add",payload:contact});
//  }
//   return (
//     <div>
//       <h1>this is example of mapreducer hook</h1>
//       <form onSubmit={addContact}>
//         <input type="text" value={name} onChange={ (e)=> setName(e.target.value)} placeholder='enter name' /> <br/>
//         <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter email'/>
//         <div>
//           <button>
//             addContact
//           </button>
//         </div>
//       </form>

//       <div>
//         <ul>
//           {state.map((contact) => {
//             return (<li key={contact.id}>
//               {contact.name}

//               <button onClick={ (contact) => dispatch({type:"delete", payload:{id:contact.id}})}>
//                 delete
//               </button>
//             </li>
//             );
//           })}
//         </ul>
//       </div>
      
//     </div>
//   );
// }
// export default App








// import React from 'react'
// import Cart from './cart';
// export const store= React.createContext();
// const App = () => {
//     const num="shyam is learning coding";
//   return (
//     <div>
//         <store.Provider value={num}>
//             < Cart />
//         </store.Provider>
//     </div>
//   )
// }

// export default App 


// import React,{useRef} from 'react'

// const App = () => {
//   const data=useRef(null)
//   return (
//      function handler(e){
//       e.preventDefault();
//       console.log(data.current.value);
//     }
//     <div>
//       <center>
//         <form onSubmit={handler}>
//           <input ref={data} type="text" placeholder="name" /> <br/>
//           <input type="submit" />
//         </form>
//       </center>
//     </div> 
//     );
// }

// export default App











// import React,{useState} from 'react'
// import City from './city.json'
// const App = () => {
//   const [search,setSearch]=useState("");
//   return (
    
//       <div>
//         <input type="text" placeholder="enter your city" value={search} 
//       onChange={(e)=>setSearch(e.target.value)} />  <br/>
    
//           <div style={{"boarder":"4px","color":"red","margin":"8px"}}>
//               {City.filter( (city)=>city.name.toLowerCase().includes(search.toLowerCase())).map((city)=> <div key={city.id}>{city.name} </div>)}
              
//           </div>
//       </div>
//   )
// }

// export default App

//useContext
// import React from 'react'
// import {useState} from "react"
// import Fcomp from './Fcomp'
// import { CounterContext } from './CounterContext';
// const App= ()=>{
//   const [count,setCount]=useState(0);
//   return(
//    <div>
//     <center>
//      <h2> {count} </h2><br />
//      <button onClick={()=>setCount(count+1)}>increment</button>
//      {console.log(count)}
//      <button onClick={()=>setCount(count-1)}>decrement</button>
     
//      <CounterContext.Provider value={{count,setCount}}>
//       <Fcomp />
//      </CounterContext.Provider>
//     </center>
//    </div>
//   )
// }

// export default App;

//useReducer
// import { useReducer } from "react";
// import React,{useState} from "react";

// const object=
// [{
//   id:Date.now(),
//   name:"suresh",
//   email:"suresh@email.com"
// }]
// function reducer(state,action){
//   switch(action.type){
//     case 'add':
//       return [...state, action.payload ]

//     case 'delete':
//       return state.filter((contact)=>{
//         return contact.id !== action.payload.id
//       })
//     default:
//       throw new Error()
//   }
// }
// const App =() =>{
//   const [state,dispatch]=useReducer(reducer,object);
//   const[ name,setName]=useState("")
//   const [email,setEmail]=useState("")
//   console.log(state);
//   const eventHandler=(e)=>{
//     e.preventDefault();
//     const object1={
//       id:Date.now(),
//       name,
//       email
//     }
//     setName("");
//     setEmail("");
//     dispatch({type :"add",payload :object1})
//   }
//   return (
//     <div>
//       <div>
//         <form onSubmit={eventHandler}>
//         <input type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)} /> <br/>
//         <input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} /> <br/>
//         <button type="submit" >addContact</button>
//         </form>
//       </div>

//       <ul>
//         {state.map((contact) => {
//            return(
//             <li key={contact.id}>
//             <h4>{contact.name}</h4>
//             <h4>{contact.email}</h4>
//             <div>
//               <button onClick={()=>dispatch({type: "delete",payload:{id:contact.id}})}>delete</button>
//             </div>
//             <div>
//               {console.log(state)}
//             </div>
//            </li>
          
//            );   
//         })}
//       </ul>
//     </div>    
//   )
// }
// export default App;



// // import React from 'react';

// // const App=()=>{
// //   localStorage.setItem('name','shyam');
// //   sessionStorage.setItem('name','ramesh');
// //   return(
// //     <div>
// //       <h1>
// //         localStorage vs SessionStorage
// //       </h1>
// //       <div>
// //        <h2> localStorage:{localStorage.getItem('name')}</h2>
// //         <h2>sessionStorage:{sessionStorage.getItem('name')}</h2>
// //       </div>
// //     </div>
// //   );

// // }
// // export default App;




// import React from 'react'
// import hoc from './hoc'

// const App = (props) => {
//   return (
//     <div>App {props.name}</div>
//   )
// }

// export default hoc(App)

import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App