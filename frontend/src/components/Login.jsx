import "../components-css/auth.css"

export default function Login({ email, setEmail, password, setPassword }) {
    return (
        <>
            <div className="auth-container">
                <h2>Sign in to your account</h2>
                <form className="auth-form">
                    <p>Your email</p>
                    <input type="text" />
                    <p>Password</p>
                    <input type="text" />
                    <button className="auth-submit">Signin</button>
                </form>
                <p>Don't have an account yet? <a href="">Find here</a></p>
            </div>
        </>
    )
}