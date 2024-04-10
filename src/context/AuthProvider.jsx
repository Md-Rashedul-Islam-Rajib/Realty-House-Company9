/* eslint-disable react/prop-types */

import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    
    // register user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // sign in user
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    // sign out user
    const logOutUser = () => {
        signOut(auth)
        .then(result=>{
            console.log(result);
            setUser(null)
        })
    }

    // google login
    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

// github login
const githubProvider = new GithubAuthProvider();
const githubLogin = () => {
    return signInWithPopup(auth, githubProvider)
}


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            if(currentUser){
                setUser(currentUser)
                console.log(currentUser);
            }
        });
        return ()=> {
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        setUser,
        createUser,
        logInUser,
        logOutUser,
        googleLogin,
        githubLogin
}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;