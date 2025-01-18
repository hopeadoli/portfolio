import XIcon from "./assets/XIcon";
import InstagramIcon from "./assets/InstagramIcon";
import "./footer.module.css";
import EmailIcon from "./assets/EmailIcon";
import LinkedinIcon from "./assets/LinkedinIcon";
import DribbbleIcon from "./assets/DribbbleIcon";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.homeFooter}>
        <p className={styles.sectionHeader}>get in touch</p>
        <p>Let’s talk.</p>
        <div className={styles.socialIcons}>
          <a href="https://dribbble.com/hopeadoli" target="blank">
            <DribbbleIcon />
          </a>
          <a href="https://linkedin.com/in/hopeadoli" target="blank">
            <LinkedinIcon />
          </a>
          <a href="mailto:adolihope@gmail.com?subject=Hello 👋🏿">
            <EmailIcon />
          </a>
          <a href="https://x.com/kafuiadoli" target="blank">
            <XIcon />
          </a>
          <a href="https://instagram.com/kafuiadoli" target="blank">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </>
  );
}
