import { server } from "./Server";
/*

가입, 인증 관련 API 를 정리합니다.

*/

class AuthAPI {
    constructor(server) {
        this.authApi = server;
    }

    // 소셜 로그인 타입과 인가코드로 로그인 진행
    login = async (data) => {
        try {
            const response = await this.authApi.get(`/api/login/${data.loginType}?code=${data.code}`);
            return response;
        } catch (e) { console.error(e); }
    }

    // 가입이 안 된 회원을 대상으로 회원가입 진행
    signup = async (accountInfo) => {
        try {
            const response = await this.authApi.post("/api/signup", {
                kakaoAccessToken: accountInfo.kakaoAccessToken,
                email: accountInfo.email,
                accountName: accountInfo.accountName,
                picture: accountInfo.picture,
            });
            return response;
        } catch (e) { console.error(e); }
    }

    // http-Only cookie 에 있는 refresh token 의 유효성을 검증해 access token 발급
    refresh = async (email) => {
        try {
            const response = await this.authApi.get(`/refresh?id=${email}`);
            console.log("refresh 결과 : " + response);
            return response.headers.Authorization;
        } catch (e) { console.error(e); }
    }

    // 헤더 Authorization 에 존재하는 access token 으로 정보 받아옴
    getInfo = async () => {
        try {
            const response = await this.authApi.get("/account");
            return response.data;
        } catch (e) { console.error(e); }
    }
}

const authApi = new AuthAPI(server);
export default authApi;