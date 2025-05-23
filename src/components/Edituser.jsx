import { useAuth } from "../context/AuthContext";
import { useEdit } from "../hooks/useEdit";
import { NavbarComponent } from "./Navbar";
import { LogoutButton } from "./buttons/Logout";
import { Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft, Save } from "lucide-react";

export function Edituser() {
    const location = useLocation();
    const userId = location.state?.userId || null;
    const { logout } = useAuth();
    const { handleSubmit, handleChange, formatDate, user } = useEdit({ userId });
    const navigate = useNavigate();

    return (
        <div>
            <NavbarComponent />
            <div className="flex-grow-1 p-4 d-flex flex-column align-items-center">
                <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                    <Button variant='outline-dark' onClick={() => navigate(-1)} className='mb-3'>
                        <ChevronLeft className='me-3' />
                        Voltar
                    </Button>
                    <LogoutButton onLogout={logout} />
                </div>
                <h1 className="fw-bold">Editar Usuário #{userId}</h1>
                {user && (
                    <Form className="w-50 mt-4" method="post" onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control
                                type="text"
                                name="email"
                                value={user.email || ''}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicFullName">
                            <Form.Label>Full name</Form.Label>
                            <Form.Control
                                type="text"
                                name="nome"
                                value={user.nome || ''}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <div className="row" style={{ display: "flex", justifyContent: "space-between" }}>
                                <div className="col-md-6">
                                    <Form.Label>Birth Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="data_nascimento"
                                        value={formatDate(user.data_nascimento || '')}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <Form.Label>Idade</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="idade"
                                        value={user.idade || ''}
                                        onChange={handleChange}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </Form.Group>
                        <Form.Group controlId="formBasicSexo">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select name="sexo" value={user.sexo || ''} onChange={handleChange} required>
                                <option value="">Selecione seu sexo</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                                <option value="Outro">Outro</option>
                            </Form.Select>
                        </Form.Group>
                        <Button
                            type="submit"
                            variant="primary">
                            <Save size={20} /> Salvar
                        </Button>
                    </Form>
                )}
            </div>
        </div>
    );
}