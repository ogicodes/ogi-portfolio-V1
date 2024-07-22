import "./Hero.scss";
import heroImg from "../../assets/pics/OGI-WHITE-BG.jpg";
import sun from "../../assets/icons/sun.svg";
import moon from "../../assets/icons/moon.svg";
import githubLight from "../../assets/icons/github-light.svg";
import githubDark from "../../assets/icons/github-dark.svg";
import linkedinLight from "../../assets/icons/linkedin-light.svg";
import linkedinDark from "../../assets/icons/linkedin-dark.svg";
import instagramLight from "../../assets/icons/instagram-light.svg";
import instagramDark from "../../assets/icons/instagram-dark.svg";
import CV from '../../assets/CV/Ognjen Dimitrijevic Resume.pdf'
import { useTheme } from "../../common/ThemeContex";

export default function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const instagramIcon = theme === "light" ? instagramLight : instagramDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;


  return (
    <section id="hero" className="hero">
      <div className="hero__color-mode-container">
        <img className="hero__img" src={heroImg} alt="profile pic of ogi" />
        <img
          className="hero__color-mode"
          src={themeIcon}
          alt="color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className="hero__info">
        <h1 className="hero__title">
          Ogi
          <br />
          Dimitrijevic
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href="https://github.com/ogicodes" target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>
          <a href="https://ca.linkedin.com/in/ogi-dim" target="_blank">
            <img src={linkedinIcon} alt="linkedin icon" />
          </a>
          <a href="https://www.instagram.com/ogi_codes/" target="_blank">
            <img src={instagramIcon} alt="instagram icon" />
          </a>
        </span>
        <p>
          With a passion for developing modern React and THREE.js web apps for
          commercial businesses.
        </p>
        <a href={CV} download>
            <button className="hero__hover">Resume</button>
        </a>
      </div>
    </section>
  );
}
