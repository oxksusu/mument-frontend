import styles from './SubmitBtn.module.css';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setLoginModalVisible} from "../store/login";
import {setUploadModalVisible} from "../store/upload";
import LoginModal from "../modal/loginModal/LoginModal";
import UploadModal from "../modal/uploadModal/UploadModal";

const SubmitBtn = () => {

    const dispatch = useDispatch();
    const uploadModalVisible = useSelector(state => state.upload.uploadModalVisible);
    const loginModalVisible = useSelector(state => state.login.loginModalVisible);
    const [isLogged, setLogin] = useState(true);

    const confirmLogin = e => {
        if (isLogged) {
            dispatch(setUploadModalVisible(true));
        } else {
            dispatch(setLoginModalVisible(true));
        }
    }

    return(
        <div>

            <button className={styles.SubmitBtn} onClick={confirmLogin}>
                <div className={styles.SubmitBtnText}>영상 등록하기</div>
            </button>

            { uploadModalVisible && <UploadModal /> }
            { loginModalVisible && <LoginModal /> }
        </div>
    )
}

export default SubmitBtn;