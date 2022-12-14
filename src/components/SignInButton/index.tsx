import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

export function SignInButton(){
    const isUserloggedIn =true;
    return isUserloggedIn ? (
        <button 
        type="button"
        className={styles.signInButton}
        >
            <FaGithub color="#84d361" />
            Edlania Santos
            <FiX color="#737388" className={styles.closeIcon} />
        </button>
    ):(
        <button 
        type="button"
        className={styles.signInButton}
        >
            <FaGithub color="#eba417" />
            Sign in with Github 
        </button>
    );
}