import { getAuth, signInWithPopup } from '@firebase/auth';
import app from '../config/firebase';

const auth = getAuth(app);

const firebaseMediaAuth = (provider) =>
    signInWithPopup(auth, provider)
        .then((result) => result)
        .catch((error) => error);

export default firebaseMediaAuth;
