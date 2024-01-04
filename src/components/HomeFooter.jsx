import XIcon from "../assets/XIcon";
import InstagramIcon from "../assets/InstagramIcon";

import "./homefooter.css";
import EmailIcon from "./EmailIcon";
import LinkedinIcon from "./LinkedinIcon";

export default function HomeFooter() {
  return (
    <>
      <div className="homeFooter">
        <p className="sectionHeader">get in touch</p>
        <p>Now you know that we’re match made in heaven eh? Let’s talk.</p>
        <div className="socialIcons">
          <LinkedinIcon />
          <EmailIcon />
          <XIcon />
          <InstagramIcon />
        </div>
      </div>
    </>
  );
}
