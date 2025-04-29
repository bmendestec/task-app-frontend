import { Spinner, Table } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { NavbarComponent } from "./Navbar";
import { LogoutButton } from "./Logout";

export function Settings() {
    const { logout, loading } = useAuth();
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
                        <h2>Configurações</h2>
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