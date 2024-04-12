import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
const auth = getAuth(app);

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
           console.log('current', currentUser)
           setUser(currentUser)
        });
        return () => {
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        userLogin,
        logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;