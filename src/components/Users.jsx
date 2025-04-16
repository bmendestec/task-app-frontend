import { useEffect, useState } from "react";
import '../components/styles/Users.css';
import { useUsers } from "../hooks/useUsers";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../service/firebase";
import { deleteDoc, doc } from "firebase/firestore";

export function Usuarios() {
    const { formatDate,
        usuarios } = useUsers();
    const navigate = useNavigate();
    
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoading(true);
            if (user) {
                setCurrentUser(user);
                navigate('/usuarios');
            } else {
                setCurrentUser(null);
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, [currentUser, loading, navigate]);


    return (
        <>
            <div className="back-icon-container">
                <a href="/login" className="back-icon-link">
                    <img src="src/assets/back.png" className="back-icon" alt="Voltar" />
                </a>
            </div>
            <header className="user-header">
                <h1 className="user-header-title">Usuários</h1>
                <p className="user-header-subtitle">Lista de usuários cadastrados</p>
            </header>
            <main className="main-content">
                <div className="users-container">
                    {usuarios.map((usuario) => (
                        <div key={usuario.id} className="user-card">
                            <h3 className="user-name">Nome: {usuario.nome_cadastro}</h3>
                            <p className="user-email">E-mail: {usuario.email}</p>
                            <p className="user-email">🎂 {formatDate(usuario.data_nascimento)}</p>
                            <p className="user-email">Idade: {usuario.idade}</p>
                            <p className="user-email">Sexo: {usuario.sexo}</p>
                            <button className="user-button view-button" onClick={() => alert(`ID do usuário: ${usuario.uid}`)}>Ver ID</button>
                            <button className="user-button delete-button" onClick={async () => (await deleteDoc(doc(db, 'usuarios', usuario.id)))}>Deletar</button>
                            <button className="user-button edit-button" onClick={() => alert(`Editar usuário com ID: ${usuario.id}`)}>Editar</button>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}
