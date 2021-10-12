import { initializeApp } from "firebase/app";
import FirebaseConfig from "./Firebase.config";

const initializeAuthentication = () => {
    initializeApp(FirebaseConfig);
};

export default initializeAuthentication;
