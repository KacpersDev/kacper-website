import styles from '../../styles/Home.module.css';
import banner from '../../images/program.svg';

export default function Header(){
    return(
        <div className={styles.header_container}>
            <div className={styles.header}>
                <p className={styles.header_text}>KacperM</p>
                <div className={styles.header_buttons}>
                    <button className={styles.header_button}>Projects</button>
                    <button className={styles.header_button}>Posts</button>
                    <button className={styles.header_button}>Source</button>  
              </div>
            </div>    
            <div className={styles.header_logo}>
                <img className={styles.logo} src={banner.src} alt={"banner"} />
            </div>       
            <div className={styles.located}>
                <p>Hello, I'm an Full Stack Developer located in Czechia!</p>
            </div>
        </div>
    )    
}