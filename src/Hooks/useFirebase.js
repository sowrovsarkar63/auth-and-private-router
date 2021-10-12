import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
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

    // Return everythign as a object

    return {
        user,
        error,
        signInUsingGoogle,
    };
};
export default useFirebase;
