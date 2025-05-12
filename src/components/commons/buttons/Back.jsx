import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export function BackButton() {
    const navigate = useNavigate();

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                <Button variant='outline-dark' onClick={() => navigate(-1)} className='mb-3'>
                    <ChevronLeft className='me-3' />
                    Voltar
                </Button>
            </div>
        </>
    );
}