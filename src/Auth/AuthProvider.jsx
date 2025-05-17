import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth , email , password)
    }
    const userInfo = {
        createUser
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