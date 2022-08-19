import styles from './container.module.css';
import {Checked} from "./Checked";

export const CheckContainer = ({closeModal}) => {

    return(
        <>
            <div className={styles.containerWrapper}>
                <div className={styles.wrapper}>
                    <div className={styles.checkWrapper}>
                        <Checked />
                        <div style={{fontSize:"4rem"}}>가입 완료!</div>
                        <div style={{marginBottom: "2rem"}}>앞으로 잘 부탁드려요.</div>
                        <button onClick={closeModal} className={styles.closeBtn}>X</button>
                    </div>
                </div>

            </div>
        </>
    );
}