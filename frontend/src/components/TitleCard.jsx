import "../components-css/titlecard.css"

export default function TitleCard() {
    return (
        <>
            <div className="titlecard-container">
                <h1>BookWise</h1>
                <h3>Book Management System for passionate students and learners</h3>
                <div className="image-container">
                    <div className="image-card-container">
                        <img 
                            src="\facebook-logo.webp" 
                            alt="Facebook Logo" 
                            className="image" 
                        />
                        <p>Facebook</p>
                    </div>
                    <div className="image-card-container">
                        <img 
                            src="\instagram-logo.webp" 
                            alt="Instagram Logo" 
                            className="image" 
                            style={{height: "4rem"}}
                        />
                        <p>Instagram</p>
                    </div>
                </div>
            </div>
        </>
    )
}