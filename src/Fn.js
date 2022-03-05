import React, {useState, useEffect, useContext} from 'react'
import { appContext } from './App'

export default function Fn(props) {
     const [number, setNumber] = useState(0)
     const [name, setName] = useState("geeksdoor")
     const appCtx = useContext(appContext)

     useEffect(()=>{
        //  console.log("change in state")

         console.log(appCtx)

        //  return ()=>{
        //      console.log("cleanup code")
        //  }

     }, [name])

    return (
        <div>
            {/* {props.number} */}
            {number}
            <br/><br/>
            <input value={name} onChange={(e)=>setName(e.target.value)} />
            this is functional component<br/>
            {/* {console.log(name)} */}
            {/* {appCtx.comp} */}
            {console.log(appCtx.comp)
            <button onClick={()=>setNumber(number+1)}>Increment</button>
        </div>
    )
}





// import React , {Component ,useEffect , useState} from 'react'

// export default function Fn(props) {

//     const [number , setnumber] = useState(7)

//     useEffect( ()=>{
//         console.log(number)
//     })

//     return (
//         <div>

//             <h1> this is state number...{number} </h1>
//             <button onClick={ ()=> {setnumber(number+10)}}> state change </button>


//         </div>
//     )
// }
