import * as React from "react";
import { useNavigate, useLocation, Navigate, } from "react-router-dom";
import { AWSAuthProvider } from "./auth";


const AuthContextType = {
    user: undefined,
    signin: (user, callback) => { },
    signout: (callback) => { },
    setOAuth2Code: (code) => { },
    oauth2signin: (callback) => { }
}

const AuthContext = React.createContext(AuthContextType);

export function AuthProvider({ children }) {
    const [user, setUser] = React.useState(null);

    const setOAuth2Code = (code) => {
        setUser(code);
    }

    const oauth2signin = (callback) => {
        if (!AWSAuthProvider.isAuthenticated) {
            AWSAuthProvider.oauth2();
        } 
        callback();
    }

    const signin = (newUser, callback) => {
        return AWSAuthProvider.signin(() => {
            setUser(newUser);
            callback();
        });
    };

    const signout = (callback) => {
        return AWSAuthProvider.signout(() => {
            setUser(null);
            callback();
        });
    };

    const value = { user, signin, signout, oauth2signin, setOAuth2Code };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    return React.useContext(AuthContext);
}

export function Secured({ children }) {
    const auth = useAuth();
    const location = useLocation();

    if (!auth.user) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        // return <Navigate to="/login" state={{ from: location }} replace />;

        return  auth.oauth2signin();
    }

    return children;
}

export function CallbackHandler({ children }) {
    const location = useLocation();
    const user = useAuth();
    const code = new URLSearchParams(location.search).get("code")
    user.setOAuth2Code(code);
    return children;
}

export default function LoginPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const auth = useAuth();

    const from = location.state?.from?.pathname || "/";

    function handleSubmit(event) {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);
        let username = formData.get("username");

        auth.signin(username, () => {
            // Send them back to the page they tried to visit when they were
            // redirected to the login page. Use { replace: true } so we don't create
            // another entry in the history stack for the login page.  This means that
            // when they get to the protected page and click the back button, they
            // won't end up back on the login page, which is also really nice for the
            // user experience.
            navigate(from, { replace: true });
        });
    }

    return (
        <div>
            <p>You must log in to view the page at {from}</p>

            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input name="username" type="text" />
                </label>{" "}
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

