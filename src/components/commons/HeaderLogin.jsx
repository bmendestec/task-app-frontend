export function HeaderLogin() {
    return (
        <div className="login-header">
            <img className="logo-header" src="src/assets/sciencebot_logo.png" alt="" />            
            <button className="add-button login-header-button" onClick={() => {alert("Teste")}}>Free trial</button>
        </div>
    )
}