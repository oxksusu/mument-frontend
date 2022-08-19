import styles from '../socialLogin.module.css';
import {GOOGLE_AUTH_URL} from "../../../service/data/google";

const GoogleBtn = () => {

    return(
        <>
            <div>
                <a href={GOOGLE_AUTH_URL}>
                    <img className={styles.btnImg} alt={"구글로그인"} src={"img/social/google.png"} />
                </a>
            </div>
        </>
    )
}

export default GoogleBtn;