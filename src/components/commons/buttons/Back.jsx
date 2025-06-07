import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function BackButton() {
    const navigate = useNavigate();
    const [hover, setHover] = useState(false);

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                <button style={{
                    border: "2px solid rgb(0, 0, 0)",
                    borderRadius: "10px",
                    padding: '10px',
                    margin: '10px',
                    backgroundColor: hover ? "white" : "#f0f0f0",
                    maxWidth: "100px",
                    cursor: "pointer"

                }}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    onClick={() => navigate(-1)}
                >
                    <ChevronLeft className='me-3' />
                    Back
                </button>
            </div>
        </>
    );
}