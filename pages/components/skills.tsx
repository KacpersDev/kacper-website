import styles from '../../styles/Home.module.css';
import banner from '../../images/skills.svg';
import nodejs from '../../images/nodejs.png';
import nextjs from '../../images/nextjs.png';

export default function Skills(){
    return(
        <div>
            <div className={styles.skills_container}>
                <div className={styles.skill_banner}>
                    <img className={styles.skills_banner} src={banner.src} alt={"Banner"} />
                </div>
                <div className={styles.skill_about}>
                    <p>Using modern technologies to deploy a website</p>
                </div>
                <div className={styles.technologies}>
                    <img className={styles.technology} src={nodejs.src} alt={"nodejs"} />
                    <img className={styles.technology} src={nextjs.src} alt={"nextjs"} />
                </div>
            </div>
        </div>
    );
}