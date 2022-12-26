import styles from '../../styles/Home.module.css';
import banner from '../../images/contact.svg';

export default function Contact(){
    return(
        <div className={styles.contact_container}>
            <img className={styles.contact_banner} src={banner.src} alt={"banner"} />
            <div className={styles.contact}>
                <p>Contact Me</p>
                <form method='POST' action='/contact'>
                    <input className={styles.contact_input} type="text" name='email' placeholder='Email'/>
                    <input className={styles.contact_input} type="text" name='name' placeholder='Name'/>
                    <textarea className={styles.contact_input} name={"message"} id={styles.textarea} cols={22} rows={9} placeholder={"Message"}/>
                    <input className={styles.submit_button} type="submit" />
                </form> 
            </div>
        </div>
    );
}