import styles from '../../styles/Home.module.css';

export default function Footer(){
    return(
        <div className={styles.footer_container}>
            <p className={styles.footer_text}>Made with ❤️ by <span id={styles.kacper}>KacperM</span></p>
        </div>
    );
}