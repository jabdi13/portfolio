import Image from "next/image";
import linkedinLogo from "../public/linkedin-icon.svg";
import githubLogo from "../public/github-icon.svg";
import mailLogo from "../public/mail-icon.svg";
import phoneLogo from "../public/phone-icon.svg";
import alphaIcon from "../public/alpha-icon.svg";

export default function Home() {
  return (
    <>
      <section>
        <h1>Abdiel</h1>
        <article>
          <h2>Software Developer</h2>
          <p>
            Hello! my name is <strong>Abdiel Ortega</strong>. I have over 4
            years of experience developing web applications and I love sharing
            knowledge.
          </p>
          <button>Contact</button>
        </article>
        <nav>
          <ul>
            <li>
              <a href="">
                {" "}
                <Image src={linkedinLogo} alt="LinkedIn logo" />{" "}
              </a>
            </li>
            <li>
              <a href="">
                <Image src={githubLogo} alt="GitHub logo" />
              </a>
            </li>
            <li>
              <a href="">
                <Image src={mailLogo} alt="GitHub logo" />
              </a>
            </li>
            <li>
              <a href="">
                <Image src={phoneLogo} alt="Phone logo" />
              </a>
            </li>
          </ul>
        </nav>
      </section>
      <section>
        <h3>About</h3>
        <p>
          Hello! my name is <strong>Abdiel Ortega</strong> I am from
          Aguascalientes México. I have four years of experience in web
          development (<em>Frontend</em> and <em>Backend</em>) with{" "}
          <em>JavaScript</em> I have Soft skills to work as a team like
          trainning colleagues, solving problems, and communication. This has
          allowed me collaboration in international projects.
        </p>
        <Image src={alphaIcon} alt="Alpha icon" />
      </section>
      <section>
        <article>
          <h3>Skills</h3>
          <hr />
          <ul>
            <li>
              <h4>JavaScript</h4>
            </li>
            <li>
              <h4>NodeJS</h4>
            </li>
            <li>
              <h4>GitHub</h4>
            </li>
            <li>
              <h4>React</h4>
            </li>
            <li>
              <h4>Redux</h4>
            </li>
            <li>
              <h4>HTML</h4>
            </li>
            <li>
              <h4>Vue</h4>
            </li>
            <li>
              <h4>Sass</h4>
            </li>
          </ul>
        </article>
      </section>
      <section>
        <article>
          <h3>Projects</h3>
          <hr />
          <ul>
            <li>
              <h5>Augmented Staffing</h5>
            </li>
            <li>
              <h5>Instant job</h5>
            </li>
            <li>
              <h5>Neobit</h5>
            </li>
            <li>
              <h5>Yelpcamp</h5>
            </li>
            <li>
              <h5>Hi sitter</h5>
            </li>
            <li>
              <h5>Wawa</h5>
            </li>
          </ul>
        </article>
      </section>
      <section>
        <h3>Contact</h3>
        <article>
          <div>
            <h3>Email</h3>
            <p>jose.4.abdiel@gmail.com</p>
          </div>
          <div>
            <h3>Email</h3>
            <p>jose.4.abdiel@gmail.com</p>
          </div>
        </article>
        <ul>
          <li>
            <a href="">
              {" "}
              <Image src={linkedinLogo} alt="LinkedIn logo" />{" "}
            </a>
          </li>
          <li>
            <a href="">
              <Image src={githubLogo} alt="GitHub logo" />
            </a>
          </li>
          <li>
            <a href="">
              <Image src={mailLogo} alt="GitHub logo" />
            </a>
          </li>
          <li>
            <a href="">
              <Image src={phoneLogo} alt="Phone logo" />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
