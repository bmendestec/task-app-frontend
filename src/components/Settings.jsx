import { Button, Spinner, Table } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { NavbarComponent } from "./Navbar";
import { LogoutButton } from "./buttons/Logout";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export function Settings() {
    const { loading } = useAuth();
    const navigate = useNavigate();

    const handleGoToUsers = () => {
        navigate("/usuarios");
    }
    return (
        <div>
            <NavbarComponent />
            <div className="flex-grow-1 p-4 d-flex flex-column align-items-centerr">                
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
                                    <td>
                                        <Button onClick={handleGoToUsers}>Usuários</ Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                )}
            </div>
        </div>
    );
}