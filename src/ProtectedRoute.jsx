import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { Spinner } from "react-bootstrap";

const ProtectedRoute = ({ children }) => {

    const { user, loading } = useAuth();

    if (loading) {
        return <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
               </Spinner>
    }
    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default ProtectedRoute;