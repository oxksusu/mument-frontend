import { server } from "./Server";

class User {
    constructor(server) {
        this.userApi = server;
    }

    getUserInfo = async (accessToken) => {
        try {

            const res = await this.userApi.get(`/api/account/mypage`,
                {
                    headers: {
                        Authorization: accessToken
                    },
                });
            return res.data;
        } catch (e) { console.error(e) }
    }

}

const userApi = new User(server);
export default userApi;