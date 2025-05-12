import { useEdit } from "../hooks/useEdit";
import { NavbarComponent } from "../../../components/Navbar";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { CircleX, Save } from "lucide-react";
import { BackButton } from "../../../components/commons/buttons/Back";

export function EditUser() {
    const location = useLocation();
    const userId = location.state?.userId || null;
    const { handleSubmit, handleChange, formatDate, user } = useEdit({ userId });
    const birthDate = formatDate(user.birth_date || '');

    return (
        <div>
            <NavbarComponent />
            <div className="flex-grow-1 p-4 d-flex flex-column align-items-center">
                <BackButton />
                {user && (
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "50%",
                    }}>
                        <h2 className="fw-bold">Editar Usuário</h2>
                        <Form method="post" onSubmit={handleSubmit}>
                            <InputGroup hasValidation>
                                <div style={{ width: "100%" }}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>E-mail</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="email"
                                            value={user.email || ''}
                                            onChange={handleChange}
                                            isInvalid={!/\S+@\S+\.\S+/.test(user.email)}
                                            isValid={/\S+@\S+\.\S+/.test(user.email) && user.email.length > 0}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid email.
                                        </Form.Control.Feedback>
                                        <Form.Control.Feedback type="valid">
                                            All done.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                            </InputGroup>
                            <Form.Group controlId="formBasicFullName">
                                <Form.Label>Full name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={user.name || ''}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <div className="row" style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div className="col-md-6">
                                        <Form.Label>Birth Date</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="birth_date"
                                            value={birthDate}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Label>Age</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="age"
                                            value={user.age || ''}
                                            onChange={handleChange}
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </Form.Group>
                            <Form.Group controlId="formBasicSexo">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select name="gender"
                                    value={user.gender || ''}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Selecione seu sexo</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Feminino">Feminino</option>
                                    <option value="Outro">Outro</option>
                                </Form.Select>
                            </Form.Group>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    width: "100%",
                                    marginTop: "15px",
                                }}
                            >
                                <Button
                                    type="submit"
                                    variant="danger"
                                    style={{ width: "100px" }}
                                >
                                    <CircleX size={20} /> Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    variant="primary"
                                    style={{ width: "100px", marginLeft: "10px" }}
                                >
                                    <Save size={20} /> Save
                                </Button>
                            </div>
                        </Form>
                    </div>
                )}
            </div>
        </div>
    );
}