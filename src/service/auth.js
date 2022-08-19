import {useEffect} from "react";
import {server} from "./Server";
import {useDispatch} from "react-redux";
import {loginNextStep} from "../component/store/login";

/*

< Auth > @sierrah


*/

export const Auth = () => {

    const dispatch = useDispatch();


    //redirect 시 받아오는 인가코드 추출
    const code = new URL(window.location.href).searchParams.get('code');

    //로그인 완료 처리 -> loginStep++
    useEffect(() => {
        (async () => {
            try {
                const res = await server.get(`api/code=${code}`)
                console.log(res);
                const token = res.headers.authorization;
                window.localStorage.setItem('token', token);

            } catch (e) {
                console.error(e);
            }
        })();
    }, []);
}

