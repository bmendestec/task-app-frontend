import { Spinner, Table } from "react-bootstrap";
import { useSettings } from "../hooks/useSettings";
import { useAuth } from "../context/AuthContext";
import { NavbarComponent } from "./Navbar";
import { LogoutButton } from "./Logout";

export function Settings() {
    const { loading,
        user } = useSettings();

    const { logout } = useAuth();
    return (
        <div className="d-flex vh-100">
            <NavbarComponent />

            <div className="flex-grow-1 p-4 d-flex flex-column align-items-centerr">
                <LogoutButton onLogout={logout} />
                {loading ? (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) : (
                    <div>
                        <h1>Olá, {user}</h1>
                        <h2>Configurações</h2>
                        <p className="lead">Aqui você pode ajustar suas preferências.</p>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Cadastros</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><a href="/usuarios">Usuários</a></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                )}
            </div>
        </div>
    );
}