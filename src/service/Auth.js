import { server } from "./Server";
/*

가입, 인증 관련 API 를 정리합니다.

*/

class Auth {
    constructor(server) {
        this.authAPI = server;
    }

    getAccessToken = async (code) => {
        try {
            const res = await this.authAPI.get(`/api/oauth/kakao?code=${code}`);
            return res.headers.authorization;
        } catch (e) { console.error(e); }
    }
}

const authApi = new Auth(server);
export default authApi;