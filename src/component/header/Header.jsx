import styles from './header.module.css';
import React, {useEffect, useState} from "react";
import Logo from "../logo/Logo";
import LoginBtn from "../loginBtn/LoginBtn";
import SubmitBtn from "../SubmitBtn/SubmitBtn";
import {useDispatch, useSelector} from "react-redux";
import {fetchAccountById, fetchByRefreshToken} from "../store/account";

const Header = React.memo(() => {

    const dispatch = useDispatch();
    const account = useSelector(state => state.account);

    useEffect(() => {
        if (account.accountName) { // 이미 로그인 돼있는 경우 아이디로 유저 정보 가져오기
            const email = account.id;
            dispatch(fetchByRefreshToken(email)).then((response) => {
                console.log(email + " 아이디였구용 " + account.accountName);
            })
        }
    }, [dispatch, account]);

    return (
        <nav className={styles.positioner}>
            <Logo />
            <SubmitBtn />
            {!account.accountName ? <LoginBtn /> : <></>}

        </nav>
    )
});

export default Header;