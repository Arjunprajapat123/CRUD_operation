// // import React,{createContext, useState} from 'react'
// // import Header from './Header'
// // import Nav from './Nav'
// // const appContext = createContext()

// // export default function App() {
// //   const[isOpen,setIsOpen] = useState(true)
  
// //   return (
// //     <appContext.Provider value={{isOpen,setIsOpen}}>

// //       <Header/>

// //     {isOpen && <Nav/>}

      
// //     </appContext.Provider>
// //   )
// // }

// // export {appContext}

// // import React, { useState, createContext } from "react";
// // import Header from "./Header";
// // import Nav from "./Nav";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import Todos from "./Todos";
// // import './App.css'
// // import { Container, Row, Col } from "react-bootstrap";
// // const appContext = createContext();

// // export default function App() {
// //   const [isOpen, setIsOpen] = useState(true);
// //   const [searchData, setsearchData] = useState({query:"", key:"some value here"})

// //   return (
// //     <appContext.Provider value={{ isOpen, setIsOpen, searchData, setsearchData }}>
// //       <Container fluid>
// //         Inside App : {searchData.query}, Key:{searchData.key}
// //         <Row>
// //           <Col xs={6}>
// //             <Header />
// //           </Col>
// //           <Col>
// //           <Todos/>
// //           </Col>
// //         </Row>
// //       </Container>
// //       {isOpen && <Nav />}
// //     </appContext.Provider>
// // ); 
// // }
// // export { appContext };


// // import React from 'react'
// // import { BrowserRouter, Routes, Route } from 'react-router-dom'

// // import About from './About'
// // import Home from './Home'
// // import Services from './Services'

// // export default function App() {
// //     return (

// //         <BrowserRouter>
// //         <Routes>
// //             <Route path="/" element={<Home/>}/>
// //             <Route path="/about" element={<About/>}/>
// //             <Route path="/services" element={<Services/>}/>
// //         </Routes>
            
// //         </BrowserRouter>
// //     )
// // }

// import React from 'react'
// import {BrowserRouter, Routes, Route} from "react-router-dom"

// import Home from './Home'
// import About from './About'
// import Services from './Services'

// export default function App() {
//   return (
//       <BrowserRouter>
//           <Routes>
//               <Route path="/" element={<Home/>} />
//               <Route path="/about" element={<About/>} />
//               <Route path="/services" element={<Services/>} />
//           </Routes>
//       </BrowserRouter>
//   )
// }

// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import Login from './Components/Login'
// import SignIn from './Components/SignIn'
// import Main from './Components/Main'
// import Todos from './Todos'

// export default function App() {
//   return (
//       <>
//         {/* <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Login/>} />
//             <Route path="/sign" element={<SignIn/>} />
//             <Route path="/main" element={<Main/>} />
//           </Routes>
//         </BrowserRouter> */}
//         <Todos></Todos>

//       </>
//   )
// }

// import React from 'react'
// import Balance from './Table'

// export default function App() {
//   return (
//     <>
//       <Balance></Balance>
//     </>
//   )
// }
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import TablePractice from './TablePractice'

export default function App() {
  return (
   <>
      <TablePractice></TablePractice>
   </>
  )
}
