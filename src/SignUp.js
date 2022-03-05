import React ,{useState} from 'react'

export default function SignUp() {

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    return (
        <>
            <form>
              
                <div>
                    <label> Email </label>
                    <input type="text" value={email}
                            onChange={ (e) => setEmail(e.target.value)} /> 
                </div>

                <div>
                    <label> Password </label>
                    <input type="password" value={password}
                            onChange={ (e) => setPassword(e.target.value)} /> 
                </div>

                <button type='submit'> login </button>
               
            </form>
            
        </>
    )
}
