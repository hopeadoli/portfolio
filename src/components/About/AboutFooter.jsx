import "./aboutfooter.css";
import XIcon from "../../assets/XIcon";
import InstagramIcon from "../../assets/InstagramIcon";
import EmailIcon from "../../assets/EmailIcon";
import LinkedinIcon from "../../assets/LinkedinIcon";

export default function AboutFooter() {
  return (
    <>
      <div className="homeFooter">
        <p className="sectionHeader">get in touch</p>
        <p>Hope you’ve seen enough eh? Now let’s talk.</p>
        <div className="socialIcons">
          <a href="https://linkedin.com/in/hopeadoli" target="blank">
            <LinkedinIcon />
          </a>
          <a href="mailto:adolihope@gmail.com?subject=Hello 👋🏿">
            <EmailIcon />
          </a>
          <a href="https://x.com/uxkafui" target="blank">
            <XIcon />
          </a>
          <a href="https://instagram.com/uxkafui" target="blank">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </>
  );
}
