import styles from './SubmitBtn.module.css';

const SubmitBtn = () => {

    return(
        <div>
            <div className={styles.SubmitBtn}>
                <div className={styles.SubmitBtnText}>영상 등록하기</div>
            </div>
        </div>
    )
}

export default SubmitBtn;