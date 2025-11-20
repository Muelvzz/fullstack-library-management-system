import "../app.css"
import "../components-css/header.css"

export default function Header() {
    return (
        <>
            <div className="two-column-container header-title">
                <div className="left-column-container">
                    <h1>BookWise {'>'} Dashboard</h1>
                </div>
                <div className="right-column-container button-list">
                    <button>🔆</button>
                    <button>🦲</button>
                </div>
            </div>
        </>
    )
}