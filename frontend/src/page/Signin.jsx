import { useState } from "react"
import Footer from "../components/Footer"
import TitleCard from "../components/TitleCard"
import Login from "../components/Login"
import "../app.css"
import "../components-css/footer.css"

export default function Signin() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

    return (
    <>
      <div className="two-column-container" style={{marginTop: "4rem", marginBottom: "3rem"}}>

        <div className="left-column-container">
            <TitleCard />
        </div>

        <div className="right-column-container">
            <Login 
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
        </div>

      </div>

      <div className="bottom-container">
        <Footer />
      </div>

    </>
    )
}