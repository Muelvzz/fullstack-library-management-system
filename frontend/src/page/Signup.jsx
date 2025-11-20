import "../components-css/auth.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../axios"

export default function Signup() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function signup(user) {
        try {
            const res = await api.post("/user/create", user)
            return res.data
        } catch (err) {
            alert(err.response.data.detail)
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = {
            email: email,
            password: password
        }

        const new_user = await signup(user)

        if (new_user) {
            navigate("/dashboard")
            setEmail("")
            setPassword("")
        }
    }

    return (
        <>
            <div className="signup-wrapper">
                <div className="create-container">
                    <h2>Create your account</h2>
                    <form className="auth-form" onSubmit={handleSubmit}>
                        <p>Your email</p>
                        <input 
                            type="text" 
                            placeholder="example@gmail.com"
                            value={email}
                            onChange={handleEmail}
                            required
                        />
                        <p>Password</p>
                        <input 
                            type="password"
                            placeholder="password1234" 
                            value={password}
                            onChange={handlePassword}
                            required
                        />
                        <button className="auth-submit">Create</button>
                    </form>
                </div>
            </div>
        </>
    )
}