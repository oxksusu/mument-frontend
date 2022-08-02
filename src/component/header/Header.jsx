import styles from './header.module.css';

import Logo from "../logo/Logo";
import LoginBtn from "../loginBtn/LoginBtn";
import SubmitBtn from "../SubmitBtn/SubmitBtn";


const Header = () => {

    return (
        <header className={styles.positioner}>
            <Logo />
            <SubmitBtn />
            <LoginBtn />
        </header>
    )
}

export default Header;