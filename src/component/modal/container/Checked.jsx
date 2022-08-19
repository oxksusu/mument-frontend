import styles from './container.module.css';

export const Checked = () => {

    return(
        <>
            <div>
                <img alt={"check"}
                     className={styles.jelloHorizontal}
                     src={"img/social/checked.png"}/>
            </div>
        </>
    );
}