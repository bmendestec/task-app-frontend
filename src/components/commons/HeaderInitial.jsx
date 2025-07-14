import { useNavigate } from "react-router-dom"

export function HeaderInitial() {
    const navigate = useNavigate();
    return (
        <div className="header-initial">
            <img className="logo-header" src="src/assets/sciencebot_logo.png" alt="" />            
            <button className="add-button login-header-button" onClick={() => navigate('/login')}>Free trial</button>
        </div>
    )
}