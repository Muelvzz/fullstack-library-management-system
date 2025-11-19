import "../components-css/auth.css"

export default function Signup() {
    return (
        <>
            <div className="signup-wrapper">
                <div className="create-container">
                    <h2>Create your account</h2>
                    <form className="auth-form">
                        <p>Your email</p>
                        <input type="text" />
                        <p>Password</p>
                        <input type="text" />
                        <button className="auth-submit">Create</button>
                    </form>
                </div>
            </div>
        </>
    )
}