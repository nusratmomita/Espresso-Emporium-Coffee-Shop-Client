import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const signInUser = (email,password) => {
        return signInWithEmailAndPassword(auth , email , password);
    }


    const userInfo = {
        createUser,
        signInUser
    }

    return (
        <div>
            <AuthContext value={userInfo}>
                {
                    children
                }
            </AuthContext>
        </div>
    );
};

export default AuthProvider;