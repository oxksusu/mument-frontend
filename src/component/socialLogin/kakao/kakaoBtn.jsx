import styles from '../socialLogin.module.css';
import {KAKAO_AUTH_URL} from "../../../service/data/kakao";
import {useDispatch} from "react-redux";
import {fetchAccountById} from "../../store/account";

const KakaoBtn = () => {

    return(
        <>
            <div>
                    <a href={KAKAO_AUTH_URL}>
                        <img className={styles.btnImg} alt="카카오로그인" src={"img/social/kakao.png"} />
                    </a>
            </div>
        </>
    )
}

export default KakaoBtn;