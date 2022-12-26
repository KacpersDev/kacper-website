import styles from '../../styles/Home.module.css';
import banner from '../../images/program.svg';
import menu from '../../images/menu.svg';

let clicked = false;

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
              <div className={styles.menu}>
                  <button className={styles.menu_button} onClick={navigation}></button>
                  <div className={styles.toggle_menu} id={'toggle'}>
                      <button className={styles.toggle_button}>Projects</button>
                      <button className={styles.toggle_button}>Posts</button>
                      <button className={styles.toggle_button}>Source</button>
                  </div>
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

const navigation = () => {
    const element = document.getElementById('toggle');
    if (!clicked) {
        if (element != undefined) {
            element.style.display = 'grid';
        } else {
            alert("unde");
        }
        clicked = true;
    } else {
        // @ts-ignore
        if (element != undefined) {
            element.style.display = 'none';
        }
        clicked = false;
    }
}   