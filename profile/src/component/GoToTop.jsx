import { useEffect, useState } from "react";
import "../styles/gototop.css"
const GoToTop = () => {
    const [BackToTopButton, setBackToTopButton] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])
    const scrollup = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
    
    return (
        <div className="top-btn">
            {BackToTopButton && (
                <a style={{
                    position: "fixed",
                    bottom: "50px",
                    right: "50px",
                    height: "50px",
                    width: "50px",
                    fontSize: "50px",
                    
                }}
                    onClick={scrollup}
                    className="to-top"
                >^</a>
            )}
        </div>
    );
}

export default GoToTop;