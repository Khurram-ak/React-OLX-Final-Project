import "./index.css"
import { signUp, signIn } from '../../config/firebase.js'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { storeUser } from '../../store/actions'





export default function LogIn({ redirect, userLogIn }) {

    const [page, setPage] = useState(true)
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()



    const register = () => {
        signUp(email, password, fullName)
        // redirect("LogIn")
        setPage(true)
        setEmail('')
        setPassword('')
        setFullName('')
    }

    const logIn = async () => {
        try {
            console.log("SIGIN FUNCTION working");
            const user = await signIn(email, password)
            redirect('Home')
            setEmail('')
            setPassword('')
            userLogIn()
            
            console.log("compo to action",user);
            dispatch(storeUser(user))
        }
        catch (e) {
            alert("Error", e.message)
        }
    }



    return <>
        {page ?
            <div className="bgc">
                <div style={{ display: "flex", justifyContent: "center", height: "120px " }}>
                    <h2>SignIn Page</h2>
                </div>
                <div style={{ display: "flex", width: "80%", margin: "auto" }}>
                    <div className="olxBox">
                        BUY and SELL <br></br>With Good And at Reasoning Price.
                    </div>
                    <div className="signIn">
                        <h3>Username:</h3>
                        <input type='email' placeholder="Enter Email Here" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <h3>Password:</h3>
                        <input type='password' placeholder="Enter Password Here" value={password} onChange={(e) => { setPassword(e.target.value) }} /><br></br>
                        <button onClick={() => logIn()}>SignIn</button><br></br>
                        <h4 onClick={() => { setPage(false) }}>Click here to create Account.</h4>

                    </div>
                </div>
            </div>
            : <div>
                <div style={{ display: "flex", justifyContent: "center", height: "120px " }}>
                    <h2>SignUp Page</h2>
                </div>
                <div style={{ display: "flex", width: "80%", margin: "auto" }}>
                    <div className="olxBox">
                        BUY and SELL <br></br>With Good And at Reasoning Price.
                    </div>
                    <div className="signIn">
                        <h3>Fullname:</h3>
                        <input type='text' placeholder="Enter Fullname Here" onChange={(e) => { setFullName(e.target.value) }} />
                        <h3>Username:</h3>
                        <input type='email' placeholder="Enter Email Here" onChange={(e) => { setEmail(e.target.value) }} />
                        <h3>Password:</h3>
                        <input type='Password' placeholder="Enter Password Here" onChange={(e) => { setPassword(e.target.value) }} /><br></br>
                        <button onClick={register}>SignUp</button><br></br>
                        <h4 onClick={() => { setPage(true) }}>ALready have an account?Click here.</h4>


                    </div>
                </div>
            </div>
        }
    </>

}








