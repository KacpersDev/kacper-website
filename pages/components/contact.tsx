import styles from '../../styles/Home.module.css';
import banner from '../../images/contact.svg';

export default function Contact(){
    return(
        <div className={styles.contact_container}>
            <img className={styles.contact_banner} src={banner.src} alt={"banner"} />
            <div className={styles.contact}>
                <p>Contact Me</p>
                <form action="POST">
                    <input className={styles.contact_input} type="text" placeholder='Email'/>
                    <input className={styles.contact_input} type="text" placeholder='Name'/>
                    <textarea className={styles.contact_input} name={"textarea"} id={styles.textarea} cols={22} rows={9} placeholder={"Message"}/>
                    <input type="submit" />
                </form> 
            </div>
        </div>
    );
}