import styles from './header.module.css';
import React from "react";
import Logo from "../logo/Logo";
import LoginBtn from "../loginBtn/LoginBtn";
import SubmitBtn from "../SubmitBtn/SubmitBtn";
import {useDispatch, useSelector} from "react-redux";

const Header = React.memo(() => {


    const dispatch = useDispatch();


    return (
        <nav className={styles.positioner}>
            <Logo />
            <SubmitBtn />
            <LoginBtn />

        </nav>
    )
});

export default Header;