import XIcon from "../../assets/XIcon";
import InstagramIcon from "../../assets/InstagramIcon";
import "./homefooter.css";
import EmailIcon from "../../assets/EmailIcon";
import LinkedinIcon from "../../assets/LinkedinIcon";

export default function HomeFooter() {
  return (
    <>
      <div className="homeFooter">
        <p className="sectionHeader">get in touch</p>
        <p>Now you know that we’re match made in heaven eh? Let’s talk.</p>
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
