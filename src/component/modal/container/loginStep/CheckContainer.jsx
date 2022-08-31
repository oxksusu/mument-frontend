import styles from '../container.module.css';
import {Checked} from "./Checked";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {accountSignup} from "../../../store/account";

export const CheckContainer = ({closeModal}) => {

    const dispatch = useDispatch();
    const login = useSelector(state => state.login);
    const accountInfo = {
        kakaoAccessToken: login.kakaoAccessToken,
        email: login.email,
        accountName: login.accountName,
        picture: login.picture,
    };
    console.log(accountInfo);

    useEffect(() => {
        dispatch(accountSignup(accountInfo));
    },[accountInfo]); //한번만 실행되게 빈배열 추가

    return(
        <>
            <div className={styles.containerWrapper}>
                <div className={styles.wrapper}>
                    <div className={styles.checkWrapper}>
                        <Checked />
                        <div style={{fontSize:"4rem"}}>가입 완료!</div>
                        <div style={{marginBottom: "2rem"}}>앞으로 잘 부탁드려요.</div>
                        <button onClick={closeModal} className={styles.closeBtn}>X</button>
                    </div>
                </div>

            </div>
        </>
    );
}