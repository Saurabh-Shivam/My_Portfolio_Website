import "./topbar.scss";
import {
  Person,
  Mail,
  GitHub,
  Instagram,
  Twitter,
  LinkedIn,
} from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    // this means if menuOpen is true set menu button to active
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <img src="assets/mypic.png" alt="" />
            Saurabh
          </a>
          <div className="itemContainer1">
            <Person className="icon" />
            <span>+91 7717705850</span>
          </div>
          <div className="itemContainer2">
            <Mail className="icon" />
            <span>saurabhshivam04@gmail.com</span>
          </div>
        </div>
        <div className="itemContainer2">
          <a
            href="https://github.com/Saurabh-Shivam"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub className="icon2" />
          </a>

          <a
            href="https://www.linkedin.com/in/saurabh-shivam-1b50931a5/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn className="icon2" />
          </a>

          <a
            href="https://www.instagram.com/saurabhhh_.__/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram className="icon2" />
          </a>

          <a
            href="https://twitter.com/SaurabhShivam4"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter className="icon2" />
          </a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
