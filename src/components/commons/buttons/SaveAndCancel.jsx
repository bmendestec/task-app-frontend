import { CircleX, Save } from "lucide-react";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

export function SaveAndCancel({ onLoading }) {
    const [hoverSave, setHoverSave] = useState(false);
    const [hoverCancel, setHoverCancel] = useState(false);
    const [onLoadingSave, setOnLoadingSave] = useState(false);
    const [onLoadingCancel, setOnLoadingCancel] = useState(false);

    useEffect(() => {
        setOnLoadingSave(false);
        setOnLoadingCancel(false);
    }, [onLoading])

    const buttonStyles = {
        borderRadius: "10px",
        padding: '10px',
        margin: '10px',
        color: "white",
        maxWidth: "90px",
        cursor: "pointer",
        fontWeight: "bold",
    }

    return (
        <div style={{
            maxWidth: "100%",
            display: "flex",
            justifyContent: "center"
        }}>
            <button style={{
                border: "2px solid rgb(66, 133, 244)",
                backgroundColor: hoverSave ? "rgb(104, 155, 238)" : "rgb(66, 133, 244)",
                ...buttonStyles
            }}
                onMouseEnter={() => setHoverSave(true)}
                onMouseLeave={() => setHoverSave(false)}
                type="submit"
                onClick={() => setOnLoadingSave(true)}
            >
                <div style={{ display: "flex", justifyContent: "center" }}>

                    {onLoadingSave ?
                        <Spinner animation="border" role="status" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <span className="visually-hidden">Loading...</span>
                        </Spinner> : <Save size={20} />}
                    Save
                </div>
            </button>
            <button style={{
                ...buttonStyles,
                border: "2px solid rgb(219, 68, 55)",
                backgroundColor: hoverCancel ? "rgb(206, 98, 88)" : "rgb(219, 68, 55)",
            }}
                onMouseEnter={() => setHoverCancel(true)}
                onMouseLeave={() => setHoverCancel(false)}
            >
                <div style={{ display: "flex", justifyContent: "center" }}>
                    {onLoadingCancel ?
                        <Spinner animation="border" role="status" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <span className="visually-hidden">Loading...</span>
                        </Spinner> : <CircleX size={25} />}
                    Cancel
                </div>
            </button>
        </div>
    )
}