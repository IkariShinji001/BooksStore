import { useState } from 'react';
import { AuthContext } from './authContext';
import isAuthenticated from './isAuthenticated';


function AuthProvider({ children }) {

    const [isAuth, setAuth] = useState(false);

    const checkAuthenticated = () => {
        const auth = isAuthenticated();
        if (auth) {
            setAuth(true);
        } else {
            setAuth(false);
        }
    }
    return (
        <AuthContext.Provider value={{ isAuth, checkAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}


export default AuthProvider;
