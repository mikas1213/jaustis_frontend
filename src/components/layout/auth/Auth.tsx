import styles from './Auth.module.css';
import { Icon } from '../../ui';
import { Person } from '../../ui/icons';

const Auth = ({ className = ''}) => {
    return (
        <div className={`${styles.auth} ${className}`}>
            <Icon className={styles.personIcon} space='0' icon={ <Person fill='var(--white-100)' /> } />
        </div>
    );
};

export default Auth;