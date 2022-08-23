export const REST_API_KEY = "4aea478c713f23fe10ce7371f913abba";
export const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;