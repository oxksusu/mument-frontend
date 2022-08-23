import Modal from "react-modal";
import {useDispatch, useSelector} from "react-redux";
import {setLoginModalVisible} from '../../store/login';
import {SocialLoginContainer} from "../container/SocialLoginContainer";
import {SetNicknameContainer} from "../container/SetNicknameContainer";
import {SetImageContainer} from "../container/SetImageContainer";
import {CheckContainer} from "../container/CheckContainer";

/*

로그인 모달창

로그인 시도시 가입된 유저면 모달을 닫고,
미가입 유저는 회원가입을 진행하도록.

stage : 로그인 단계를 숫자로 할당

*/

const stage = {
    SOCIAL_LOGIN:1,
    SET_NICKNAME:2,
    SET_IMAGE:3,
    SIGN_UP_END:4,
}

const customStyles = {
    content: {
        width: '50rem',
        height: '35rem',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '2rem',
    },
};

function LoginModal() {
    const dispatch = useDispatch();
    const loginModalVisible = useSelector(state => state.login.loginModalVisible);
    const loginStep = useSelector((state) => state.login.loginStep);

    /*

    loginStep

    loginStep 의 state 에 따라 다른 컴포넌트를 렌더링하게 케이스 분리했습니다.


    */
    const renderByLoginStep = (loginStep) => {
        switch (loginStep) {
            case stage.SOCIAL_LOGIN:
                return <SocialLoginContainer />;
            case stage.SET_NICKNAME:
                return <SetNicknameContainer />;
            case stage.SET_IMAGE:
                return <SetImageContainer />;
            case stage.SIGN_UP_END:
                return <CheckContainer closeModal={closeModal}/>;

            default:
                return <div></div>;
        }
    }

    function afterOpenModal() {
        /* 흠.. 이 자리에 뭘 넣어야 할까 */
    }

    function closeModal() {
        dispatch(setLoginModalVisible(false));
    }


    return (
        <div>
            <Modal
                isOpen={loginModalVisible}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="Login"
            >
                <div>{renderByLoginStep(loginStep)}</div>
            </Modal>
        </div>
    );
}

export default LoginModal;