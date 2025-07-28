import { useEdit } from "../hooks/useEdit";
import { ListUsers } from "./ListUsers";
import { SaveAndCancel } from "../../../components/commons/buttons/SaveAndCancel";
import { useAuth } from "../../../context/AuthContext";
import './styles/EditUser.css';
import { useEffect } from "react";

export function EditUser({ userId, onBack, setReloadPanel }) {
    const { handleSubmit, handleChange, formatDate, user } = useEdit({ userId });
    const birthDate = formatDate(user.birth_date || '');
    const { loading } = useAuth();

    useEffect(() => {
        setReloadPanel(false);
    }, []);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        await handleSubmit(e);
        setReloadPanel(true);
        onBack();
    };

    return (
        <>
            <div className="edit-container">
                {user && (
                    <>
                        <div className="edit-title" >
                            <h2>Edit user</h2>
                        </div>
                        <form method="post" onSubmit={handleFormSubmit} className="edit-form">
                            <div id="email">
                                <label className="label-email">E-mail</label>
                                <input
                                    className="input-email"
                                    type="text"
                                    name="email"
                                    value={user.email || ''}
                                    onChange={handleChange}
                                    isInvalid={!/\S+@\S+\.\S+/.test(user.email)}
                                    isValid={/\S+@\S+\.\S+/.test(user.email) && user.email.length > 0}
                                />
                            </div>
                            <div id="name">
                                <label className="label-name">Full name</label>
                                <input
                                    className="input-name"
                                    type="text"
                                    name="name"
                                    value={user.name || ''}
                                    onChange={handleChange}
                                />
                            </div>
                            <div id="birth_date">
                                <div>
                                    <label className="label-birth-date">Birth Date</label>
                                    <input
                                        className="input-birth-date"
                                        type="date"
                                        name="birth_date"
                                        value={birthDate || ''}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="label-age">Idade</label>
                                    <input
                                        className="input-age"
                                        type="number"
                                        name="age"
                                        value={user.age || ''}
                                        onChange={handleChange}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div id="gender">
                                <label className="label-gender">Gender</label>
                                <select
                                    className="input-gender"
                                    name="gender"
                                    value={user.gender || ''}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Selecione seu sexo</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Feminino">Feminino</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </div>
                            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                                <button type="submit" disabled={loading}>
                                    {loading ? 'Saving...' : 'Save'}
                                </button>
                                <button type="button" onClick={onBack}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </>

    );
}