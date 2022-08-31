import KakaoBtn from "../../socialLogin/kakao/kakaoBtn";
import GoogleBtn from "../../socialLogin/google/GoogleBtn";
import {useDispatch} from "react-redux";
import {fetchAccountById} from "../../store/account";

export const BtnContainer = () => {


    return(
      <>
          <KakaoBtn />
          <GoogleBtn />
      </>
    );
}