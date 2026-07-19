import { Navigate } from "react-router";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProtectedRoute = ({ children }: { children: any }) => {
    // Get the auth state from the store / or local storage (using localStorage.getItem("user"))
    const auth = localStorage.getItem("auth");

    if (auth) {
        // If the user is not authenticated, redirect to the login page
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
