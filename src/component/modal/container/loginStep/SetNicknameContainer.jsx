import styles from '../container.module.css';
import {useDispatch, useSelector} from "react-redux";
import {loginNextStep, loginPrevStep, setSignup} from "../../../store/login";
import {NextStepBtn} from "../stepBtn/NextStepBtn";
import {useEffect, useState} from "react";
import {setAccount} from "../../../store/account";
import authApi from "../../../../service/AuthAPI";

/*

닉네임 설정하는 컴포넌트

<추가하고 싶은 기능들?>
- 2글자 이상 작성되면 다음으로 넘어가기 버튼 깜빡거리게.

 */

export const SetNicknameContainer = () => {

    const dispatch = useDispatch();
    const login = useSelector(state => state.login);
    console.log(login.email);
    const [accountName, setAccountName] = useState("");

    const nextStepHandler = () => {
        dispatch(loginNextStep());
        dispatch(setSignup({key: "accountName", value: accountName}));
    }

    const onNicknameHandler = async(e) => {
        await setAccountName(e.target.value);
        console.log(login.accountName);
    }

    console.log((accountName + " 그리고 이건 스토어에서 꺼내온 값 -> " + login.accountName));


    return (

        <>
            <div className={styles.containerWrapper}>
                <div className={styles.wrapper}>
                    <div className={styles.nicknameWrapper}>
                        <div>사용하실 닉네임을 입력해주세요.</div>
                        <input className={styles.nicknameInput}
                               name={"setNickname"}
                               type={"text"}
                               placeholder={"2자 이상 입력해주세요."} onChange={onNicknameHandler}/>
                    </div>
                    <NextStepBtn nextStepHandler={nextStepHandler}/>
                </div>
            </div>
        </>
    );
}