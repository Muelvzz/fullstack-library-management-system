import "../components-css/auth.css"
import { Link, useNavigate } from "react-router-dom"
import api from "../axios"

export default function Login({ email, setEmail, password, setPassword }) {

    const navigate = useNavigate()

    const handleEmail = (e) => {
        setEmail(e.target.value)
        console.log(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        console.log(e.target.value)
    }

    async function login(user) {
        try {
            const res = await api.post("/user/login", user)
            return res.data
        } catch (err) {
            if (err.response) {
                console.log(err.response.data.detail)
            } else {
                console.log(`Network or CORS error: ${err.message}`)
            }
            return null
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = {
            email: email,
            password: password
        }

        const check_user = await login(user)

        if (check_user) {
            navigate("/dashboard")
        } else {
            alert("Invalid credentials")
        }

        setEmail("")
        setPassword("")
    }

    return (
        <>
            <div className="auth-container">

                <h2>Sign in to your account</h2>

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

                    <button className="auth-submit">Signin</button>
                </form>

                <p>Don't have an account yet? <Link to="/signup">Find here</Link></p>

            </div>
        </>
    )
}