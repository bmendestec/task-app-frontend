import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useInitial() {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const userStored = localStorage.getItem('email');
        const tokenStored = localStorage.getItem('authToken');
        const userName = localStorage.getItem('userName');
        if (!userStored && !tokenStored && !userName) {
            setUser(null);
            navigate('/login');
        } else {
            setUser(userName);
            navigate('/');
        }
        setLoading(false);
    }, []);

    return {
        setUser,
        loading,
        user
    }
}