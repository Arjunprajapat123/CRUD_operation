// import React from 'react'
// import { useContext } from 'react'
// import { appContext } from './App'

// export default function Header() {
//     const appCtx = useContext(appContext)
//     return (
//         <div>
//             Header
//             <button onClick={()=>{
//                 appCtx.setIsOpen(!appCtx.isOpen)
//             }}>Click</button>
//         </div>
//     )
// }

import React, {useContext} from 'react'
import { appContext } from './App'
import {Button, Nav, Form} from 'react-bootstrap'

export default function Header() {
    const appCtx = useContext(appContext)
    return (
        <div>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue={appCtx.searchData.query}
            onChange={(e)=>{appCtx.setsearchData({...appCtx.searchData, query:e.target.value})}}
          />
            <Nav
             variant="tabs" 
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
           
         
        </div>
    )
}
