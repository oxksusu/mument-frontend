import styles from './logo.module.css';

const Logo = () => {

    return(
        <div>
            <a href="/">
                <img className={styles.logoSize} alt={"logo"} src={"img/logo/logo.png"} />
            </a>
        </div>
    )
}

export default Logo;