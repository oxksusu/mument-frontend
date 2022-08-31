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
                            <div className={styles.greetingEmoji}>👋</div>
                            <div>
                                <span>순간이 특별해지는 공간, </span>
                                <span className={styles.textColor}>mument</span>
                            </div>
                            <div style={{fontSize:"1.5rem", marginBottom:"1rem"}}>로그인하시면 더 많은 기능을 이용하실 수 있어요.</div>
                        </div>
                        <BtnContainer />
                        <button onClick={closeModal} className={styles.closeBtn}>X</button>
                    </div>

                </div>
            </div>

        </>
    );
}