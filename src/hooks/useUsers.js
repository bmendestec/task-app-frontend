import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../service/firebase";
import { useEffect, useState } from "react";

export function useUsers() {
    const [usuarios, setUsuarios] = useState([]);

    const fetchUserData = async () => {
        try {
            const userRef = collection(db, 'usuarios');
            const q = query(userRef);
            const querySnap = await getDocs(q);

            const usuarios = querySnap.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            setUsuarios(usuarios);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return {
        formatDate,
        usuarios
    };

}