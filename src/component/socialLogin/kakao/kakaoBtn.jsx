import styles from '../socialLogin.module.css';
import kakao from '../../../img/social/kakao.png'

const KakaoBtn = () => {

    return(
        <>
            <div>
                <button className={styles.kakao} type={"submit"} name={"kakao"}>
                    카카오 로그인
                </button>
            </div>
        </>
    )
}

export default KakaoBtn;