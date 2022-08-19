import styles from '../container.module.css'

export const PrevStepBtn = ({prevStepHandler}) => {


    return (
        <>
            <div>
                <button className={styles.prevBtn} onClick={prevStepHandler}>◀️️</button>
            </div>
        </>
    );
}