import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Spinner from "../ui/Spinner";

function ProtectedRoute() {
    const {firebaseUser, loading} = useAuth();

    if (loading) {
        return <div className="flex items-center justify-center h-screen"><Spinner loading={loading} /></div>;
    }

    console.log(firebaseUser)

    if (!firebaseUser) {
        return <Navigate to="/login" replace />;
    }


    return (<Outlet />
    )
}

export default ProtectedRoute
