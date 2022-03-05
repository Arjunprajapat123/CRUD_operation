import React from 'react'
import { Link } from 'react-router-dom'

export default function Heandle({children}) {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Login</Link>
                </li>

                <li>
                    <Link to="/sign">Sign In</Link>
                </li>

                <li>
                    <Link to="/main">Main</Link>
                </li>
            </ul>
           
            {children}
            
        </div>
    )
}
