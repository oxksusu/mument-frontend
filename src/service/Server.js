import axios from "axios";

/*

작성자 : sierra-h
axios 모듈화 컴포넌트입니다.
create 메서드를 사용해 axios 인스턴스를 생성합니다.
포트 번호는 백을 기준으로 합니다.

*/
const baseURL = "http://localhost:4040"

export const server = axios.create({
    baseURL: baseURL,
    withCredentials: true,
})