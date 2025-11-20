import "../App.css"
import "../components-css/bookcard.css"

export default function BookCard() {
    return (
        <>
            <div className="bookcard-wrapper">
                <div className="two-column-container">
                    <div className="left-column-container button-tabs">
                        <button style={{backgroundColor: "#2F73F3"}}>Create</button>
                    </div>
                    <div className="right-column-container button-tabs">
                        <button style={{backgroundColor: "#14213D"}}>Genre</button>
                        <button style={{backgroundColor: "#2F73F3"}}>Search</button>
                    </div>
                </div>
            </div>
        </>
    )
}