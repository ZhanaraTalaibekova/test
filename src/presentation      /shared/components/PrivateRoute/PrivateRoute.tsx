import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface PrivateRouteProps {
    children: ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (token == null) {
            navigate("/register");
        }
    }, [token, navigate]);

    return <>{children}</>;
};
