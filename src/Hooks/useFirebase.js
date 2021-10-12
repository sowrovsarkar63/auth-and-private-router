import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

const useFirebase = () => {
    const [user, setuser] = useState({});
    const [error, setError] = useState("");
    initializeAuthentication();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    // google sign in
    const signInUsingGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setuser(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    };
    // logout

    const LogoutUser = () => {
        signOut(auth)
            .then(() => {
                setuser("");
            })
            .catch((error) => {
                setError(error.message);
            });
    };
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setuser(user);
            } else {
                // singout
            }
        });
    }, []);

    // Return everythign as a object

    return {
        user,
        error,
        signInUsingGoogle,
        LogoutUser,
    };
};
export default useFirebase;
