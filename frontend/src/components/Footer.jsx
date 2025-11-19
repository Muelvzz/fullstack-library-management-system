import "../components-css/footer.css"
import "../app.css"

export default function Footer() {
    return (
        <footer>
            <div className="two-column-container">
                <div className="left-column-container">
                    <h1 className="footer-title">
                        <a href="https://www.linkedin.com/in/psalm-muelvin-lopez-003a78227/">
                            <span style={{color: "#70798C", fontFamily: "Irish Grover"}}>Psalm Muelvin </span>Lopez
                        </a>
                    </h1>
                </div>
                <div className="right-column-container">
                    <ul>
                        <li>Developers</li>
                        <li>
                            <a href="https://www.linkedin.com/in/psalm-muelvin-lopez-003a78227/">Muelvin Lopez</a>
                        </li>
                    </ul>
                    <ul>
                        <li>Follow Me</li>
                        <li>
                            <a href="https://www.linkedin.com/in/psalm-muelvin-lopez-003a78227/">LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://github.com/Muelvzz">GitHub</a>
                        </li>
                    </ul>
                    <ul>
                        <li>Resources</li>
                        <li>
                            <a href="https://fastapi.tiangolo.com/">FastAPI</a>
                        </li>
                        <li>
                            <a href="https://react.dev/">React</a>
                        </li>
                        <li>
                            <a href="https://www.postgresql.org/">PostgreSQL</a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="two-column-container">
                <div className="left-column-container">
                    <p style={{fontSize: "12px"}}>© 2025 Muelvin Lopez. All Rights Reserved.</p>
                </div>
                <div className="right-column-container">
                    <p style={{fontSize: "12px"}}>Privacy Policy</p>
                </div>
            </div>
        </footer>
    )
}