import styles from './spinner.module.css';

const Spinner = () => {

    return (
        <div>
            <div className={ styles.wrapper }>
                <span className={ styles.smaller }>Wait a </span>
                <span className={ styles.bigger }>MUMENT </span>
                <span className={ styles.smaller }>. . .</span>
                <div className={ styles.spinner }> </div>
            </div>
        </div>
    );

}

export default Spinner;