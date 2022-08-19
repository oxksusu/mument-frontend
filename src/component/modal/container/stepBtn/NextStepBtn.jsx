import styles from '../container.module.css'

export const NextStepBtn = ({nextStepHandler}) => {


    return (
        <>
            <div>
                <button className={styles.nextBtn} onClick={nextStepHandler}>▶️</button>
            </div>
        </>
    );
}