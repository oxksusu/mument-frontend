import styles from './container.module.css';
import {useRef, useState} from "react";
import {server} from "../../../service/Server";
import {loginNextStep, loginPrevStep} from "../../store/login";
import {useDispatch} from "react-redux";
import {NextStepBtn} from "./stepBtn/NextStepBtn";
import {PrevStepBtn} from "./stepBtn/PrevStepBtn";

export const SetImageContainer = () => {

    const [profile, setProfile] = useState("img/social/auth_logo.png");
    const dispatch = useDispatch();

    const prevStepHandler = async() => { dispatch(loginPrevStep()); }
    const nextStepHandler = async() => { dispatch(loginNextStep()); }
    /*
    미리보기 기능 => useState 사용 + 미리보기 대기 중 스피너도 추가할 것

    state -> src 로 관리할 것인가?
    */

    /*
    파일 업로드 기본 버튼을 hidden 으로 숨기고,
    useRef 이용해 새로 만든 버튼에 기능을 달아주었음
     */
    const setProfileImage = useRef(null);
    const imgBtnClick = e => {
        e.preventDefault();
        setProfileImage.current.click();
    }

    /*

    formData 이용해 백으로 사진 데이터 보내줄 예정.
    (+) setProfile 로 미리보기용 state 도 컨트롤하자

     */
    const imgHandler = async (e:any) => {
        setProfile(URL.createObjectURL(e.target.files[0]));
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        const response = await server.post('/signup/profile', formData);
    }

    return(
        <>
            <div className={styles.containerWrapper}>

                <PrevStepBtn prevStepHandler={prevStepHandler}/>
                <div className={styles.wrapper}>

                    {/* upload container */}
                    <div className={styles.profileWrapper}>
                        <div className={styles.imgWrapper}>프로필 사진 선택
                            <div style={{fontSize: "1.2rem"}}>이미지 확장자만 업로드 가능합니다.</div>
                        </div>
                        <div className={styles.imageBox}>
                            <img alt={"미리보기"}
                                 src={profile}
                                 className={styles.imageThumbnail}/>
                        </div>
                        <div><button className={styles.imgInputBtn} onClick={imgBtnClick}>사진 업로드</button></div>
                        </div>
                        {/* 원래 업로드 버튼은 hidden 으로 숨겼음 */}
                        <input ref={setProfileImage}
                               className={styles.imgInput}
                               type={'file'}
                               id={"profile"}
                               accept={'image/*'}
                               name={'file'}
                               onChange={imgHandler} />
                    </div>
                <NextStepBtn nextStepHandler={nextStepHandler} />

            </div>
        </>
    );
}