import {useEffect, useState} from "react";
import {server} from "./Server";
import {useDispatch, useSelector} from "react-redux";
import {loginNextStep} from "../component/store/login";
import {setLoginModalVisible} from "../component/store/login";
import Spinner from "../component/spinner/spinner";
import {Navigate} from "react-router";
import {Cookies} from "react-cookie";
import authApi from "./Auth";

/*

< Auth > @sierrah


*/

export const Test = () => {

    const dispatch = useDispatch();
    const [isLogin, setLogin] = useState(false);

    /*
    로그인 완료시 다음 페이지로 이동.
    근데 메인 페이지로 리다이렉트 시켜서 모달창 띄우는게 좋을듯?
    어떻게 이동시킬 것이냐...
     */
    const setNextStep = () => {
        setLogin(true);
        // dispatch(setLoginModalVisible(true));
    }

    /*
    redirect 시 받아오는 인가코드 추출
    URL 은 버튼 클릭 시 리다이렉트되는 창에서의 주소임
     */
    const code = new URL(window.location.href).searchParams.get("code");
    console.log("인가코드 : " + code);

    //로그인 완료 처리 -> loginStep++
    useEffect(() => {
        (async () => {
            try {
                const res = await authApi.getAccessToken(code);
                console.log("발급된 jwt : " + res);

                const authRes = (await server
                    .get(`/api/account/mypage`,
                        {
                            headers: {
                                Authorization: res
                            }
                        }));

                console.log("로그인을 시도한 아이디 : " + authRes.data.email);
                dispatch(loginNextStep());
                setNextStep(); //헐어케됨이거

                /*
                여기서 토큰까지 받아와서 인증 유무를 state 로 관리하고
                state 에 따라 spinner 와 다음 모달창을 렌더링하게 하면 될듯...
                 */


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

