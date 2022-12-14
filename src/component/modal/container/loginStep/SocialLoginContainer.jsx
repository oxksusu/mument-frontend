import styles from "../container.module.css"
import KakaoBtn from "../../../socialLogin/kakao/kakaoBtn";
import GoogleBtn from "../../../socialLogin/google/GoogleBtn";
import {useDispatch} from "react-redux";
import {setLoginModalVisible} from "../../../store/login";
import {BtnContainer} from "../BtnContainer";

export const SocialLoginContainer = () => {

    const dispatch = useDispatch();
    function closeModal() {
        dispatch(setLoginModalVisible(false));
    }

    return(
        <>
            <div className={styles.containerWrapper}>
                <div className={styles.wrapper}>
                    <div className={styles.greetingWrapper}>
                        <div className={styles.greetingText}>
                            <div className={styles.greetingEmoji}>π</div>
                            <div>
                                <span>μκ°μ΄ νΉλ³ν΄μ§λ κ³΅κ°, </span>
                                <span className={styles.textColor}>mument</span>
                            </div>
                            <div style={{fontSize:"1.5rem", marginBottom:"1rem"}}>λ‘κ·ΈμΈνμλ©΄ λ λ§μ κΈ°λ₯μ μ΄μ©νμ€ μ μμ΄μ.</div>
                        </div>
                        <BtnContainer />
                        <button onClick={closeModal} className={styles.closeBtn}>X</button>
                    </div>

                </div>
            </div>

        </>
    );
}