import styles from '../socialLogin.module.css';

const GoogleBtn = () => {

    return(
        <>
            <div>
                <button className={styles.google} type={"submit"} name={"google"}>구글 로그인</button>
            </div>
        </>
    )
}

export default GoogleBtn;