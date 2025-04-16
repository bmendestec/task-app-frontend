import { getDocs, collection, query, where } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../service/firebase";

export function useHome() {

    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth();

        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setLoading(true);
            if (currentUser) {
                try {
                    const userRef = collection(db, 'usuarios');
                    const q = query(userRef, where('uid', '==', currentUser.uid));
                    const querySnapshot = await getDocs(q);
                    querySnapshot.forEach((doc) => {
                        const nameCurrentUser = doc.data().nome_cadastro
                        setUser(currentUser);
                        setUserData(nameCurrentUser);
                    });

                } catch (error) {
                    console.log('Error getting document:', error);
                    setUser(null);
                    setUserData(null);
                }
            } else {
                setUser(null);
                setUserData(null);
                navigate('/login');
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [navigate]);

    const handleCloseSession = async () => {
        const auth = getAuth();
        await auth.signOut();
        setUser(null);
        setUserData(null);
        navigate('/login');
    }

    return { handleCloseSession, user, userData, loading };
}