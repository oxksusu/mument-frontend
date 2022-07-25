import styles from './LoginBtn.module.css';

const LoginBtn = () => {

    return(
        <div>
            <div className={styles.loginBtn}>
                <div className={styles.loginBtnText}>로그인</div>
            </div>
        </div>
    )
}

export default LoginBtn;