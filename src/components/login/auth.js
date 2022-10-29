/**
 * This represents some generic auth provider API, like Firebase.
 */
const LOGIN = `${process.env.REACT_APP_AUTH_URI}/login?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${window.location.origin}`
const LOGOUT = `${process.env.REACT_APP_AUTH_URI}/logout?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${window.location.origin}`
const AWSAuthProvider = {
    isAuthenticated: false,
    oauth2() {
        AWSAuthProvider.isAuthenticated = true;
        window.location.href = LOGIN;
    },
    signin(callback) {
        // api call to login
        AWSAuthProvider.isAuthenticated = true;
        setTimeout(callback, 100); // fake async
    },
    signout(callback) {
        // api call to logout
        AWSAuthProvider.isAuthenticated = false;
        window.location.href = LOGOUT;
        setTimeout(callback, 100);
    },
};

export { AWSAuthProvider };