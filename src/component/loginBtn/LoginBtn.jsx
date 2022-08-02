import styles from './LoginBtn.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setLoginModalVisible} from "../store/login";
import LoginModal from "../modal/loginModal/LoginModal";

const LoginBtn = () => {

    const dispatch = useDispatch();
    const loginModalVisible = useSelector(state => state.login.loginModalVisible);
    const modalOpen = e => {
        dispatch(setLoginModalVisible(true));
    }

    return(
        <div>

            <button className={styles.loginBtn} onClick={modalOpen}>
                <div className={styles.loginBtnText}>로그인</div>
            </button>

            { loginModalVisible && <LoginModal /> }
        </div>

    )
}

export default LoginBtn;