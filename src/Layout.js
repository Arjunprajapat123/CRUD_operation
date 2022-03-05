// import React from 'react'
// import {Link} from 'react-router-dom' 

// export default function Layout({children}) {
//     return (
//         <div>
//            <ul>
//                <li>
//                    <Link to="/">Home</Link>
//                </li>
//                <li>
//                    <Link to="/about">About</Link>
//                </li>
//                <li>
//                    <Link to="/services">Go to Service</Link>
//                </li>


//             </ul>
//             {/* {children} */}
//             <p>This is footer</p>


//         </div>
//     )
// }
import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout({ children }) {
    return (
        <div>

            
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">about</Link>
                </li>
                <li>
                    <Link to="/services">services</Link>
                </li>
            </ul>

            {children}

            <br />

            <p> This is a footer </p>


        </div>
    )
}
