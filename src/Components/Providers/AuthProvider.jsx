import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
const auth = getAuth(app);

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [loader, setLoader] = useState(true);
    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const userLogin = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        setLoader(true);
        return signOut(auth)
    }

    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
    }
    const gitHubProvider = new GithubAuthProvider();
    const gitHubLogin = () => {
        setLoader(true);
        return signInWithPopup(auth, gitHubProvider);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
           console.log('current', currentUser)
           setUser(currentUser)
           setLoader(false);
        });
        return () => {
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        loader,
        createUser,
        userLogin,
        googleLogin,
        gitHubLogin,
        logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;