import {useEffect, useState} from "react";
import {server} from "../service/Server";
import {useDispatch, useSelector} from "react-redux";
import login, {loginNextStep, setSignup} from "../component/store/login";
import {setLoginModalVisible} from "../component/store/login";
import Spinner from "../component/spinner/spinner";
import {Navigate} from "react-router";
import authApi from "../service/AuthAPI";
import LoginModal from "../component/modal/loginModal/LoginModal";

/*

< Auth > @sierrah


*/

export const SetData = () => {

    const dispatch = useDispatch();
    const [isLogin, setLogin] = useState(false);

    /*
    로그인 완료시 다음 페이지로 이동.
    근데 메인 페이지로 리다이렉트 시켜서 모달창 띄우는게 좋을듯?
    어떻게 이동시킬 것이냐... ====> 해결!
     */

    /*
    redirect 시 받아오는 인가코드 추출
    URL 은 버튼 클릭 시 리다이렉트되는 창에서의 주소임
     */
    const authCode = new URL(window.location.href).searchParams.get("code");


    //로그인 완료 처리 -> 리디렉트
    useEffect(() => {
        (async () => {
            try {
                const data = {
                    loginType: "kakao",
                    code: authCode,
                };
                const res = await authApi.login(data);
                console.log(res);
                const loginRes = res.data.loginSuccess;
                console.log(loginRes);
                console.log(res.data);
                if (!loginRes) {
                    dispatch(loginNextStep());
                    dispatch(setLoginModalVisible(true));
                    dispatch(setSignup({key: "email", value: res.data.account.email}));
                    dispatch(setSignup({key: "kakaoAccessToken", value: res.data.kakaoAccessToken}));
                }
                setLogin(true);

            } catch (e) {
                console.error(e);
            }

        })();
    }, []);

    // Redirect -> Navigate 로 바뀜
    return(
        <>
            {isLogin ? <Navigate to={"/"} /> : <Spinner />}
        </>
    );
}

