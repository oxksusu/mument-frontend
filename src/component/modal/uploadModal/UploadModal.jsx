import Modal from "react-modal";
import {useDispatch, useSelector} from "react-redux";
import {setUploadModalVisible} from "../../store/upload";
import styles from './UploadModal.module.css';
import {useState} from "react";

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
        borderRadius: '2rem'
    },
};

/*

Upload 모달에서도 isOpen이 modalVisible이므로
Upload 모달의 state 관리 리덕스 만들고 나서 수정해주자

*/

function UploadModal() {
    const dispatch = useDispatch();
    const uploadModalVisible = useSelector(state => state.upload.uploadModalVisible);
    const [uploadState, setState] = useState(true);

    function afterOpenModal() {
        // 배경 뿌옇게 만들고 싶음...!!
    }

    function closeModal() {
        dispatch(setUploadModalVisible(false));
    }


    return (
        <div>
            <Modal
                isOpen={uploadModalVisible}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="Upload"
            >
                <div className={styles.greetingText}>
                    <div>영상 등록하기</div>

                </div>
                <div className={styles.bottom}>
                    <button className={styles.closeBtn} onClick={closeModal}>닫기</button>
                </div>
            </Modal>
        </div>
    );
}

export default UploadModal;