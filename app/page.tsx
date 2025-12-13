import Image from "next/image";
import linkedinLogo from "../public/linkedin-icon.svg";
import githubLogo from "../public/github-icon.svg";
import mailLogo from "../public/mail-icon.svg";
import phoneLogo from "../public/phone-icon.svg";
import omegaInclinedIcon from "../public/omega-inclined.svg";
import photoBG from "../public/photo-bg.png";
import { SiJavascript, SiNodedotjs, SiGithub, SiReact, SiRedux, SiHtml5, SiVuedotjs, SiSass } from 'react-icons/si';

export default function Home() {
  return (
    <main id="main-content" role="main">
      <section id="home" aria-label="Introduction" className="backgroundRadial relative sm:h-screen sm:block flex flex-col items-center -space-y-28 dark:text-white">
        <h1 className="mainTitle translate-y-24 sm:absolute sm:right-8 sm:top-14 text-center text-9xl w-full sm:w-auto">Abdiel</h1>
        <figure className="sm:absolute sm:bottom-0 translate-y-6 sm:right-0 w-3/4 sm:w-1/3">
          <Image
            className="saturate-0 w-full"
            src={photoBG}
            alt="Abdiel Ortega, Software Developer, professional headshot"
          />
        </figure>
        <article className="sm:absolute left-28 top-2/4 sm:w-5/12 sm:-translate-y-2/4 space-y-5 sm:space-y-10 p-5 sm:p-0">
          <h2 className="text-6xl">
            Software
            <br />
            Developer
          </h2>
          <p>
            Hello! my name is <strong>Abdiel Ortega</strong>. I have 6
            years of experience developing web applications and I love sharing
            knowledge.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gold-500 px-8 py-3.5 text-xl text-navy font-semibold shadow-lg hover:shadow-xl hover:bg-gold-600 transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-gold-400"
            >
              <span>Let&apos;s Talk</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white px-8 py-3.5 text-xl font-semibold hover:bg-white hover:text-powder-600 transition-all duration-300 focus-visible:ring-4 focus-visible:ring-white"
            >
              View Projects
            </a>
          </div>
        </article>
        <nav className="hidden sm:block absolute bottom-14 left-28" aria-label="Social media links">
          <ul className="flex gap-7">
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/pepeloper/"
                rel="noopener noreferrer"
                aria-label="Visit Abdiel's LinkedIn profile (opens in new tab)"
              >
                <Image src={linkedinLogo} alt="" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/jabdi13"
                rel="noopener noreferrer"
                aria-label="Visit Abdiel's GitHub repositories (opens in new tab)"
              >
                <Image src={githubLogo} alt="" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="mailto:jose.4.abdiel@gmail.com"
                aria-label="Send email to jose.4.abdiel@gmail.com"
              >
                <Image src={mailLogo} alt="" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://wa.me/524492678272?text=Hello,%20how%20are%20you?"
                rel="noopener noreferrer"
                aria-label="Contact via WhatsApp (opens in new tab)"
              >
                <Image src={phoneLogo} alt="" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>
      </section>
      <section
        id="about"
        aria-labelledby="about-heading"
        className="flex sm:flex-row flex-col gap-8 items-center justify-around bg-powder-500 dark:bg-navy relative p-4 dark:text-white"
      >
        <h3 id="about-heading" className="text-4xl uppercase z-10">About</h3>
        <p className="sm:w-2/5 text-justify z-10">
          Hello! I&apos;m <strong>Abdiel Ortega</strong>, a frontend developer based in
          Aguascalientes, México, with 6 years of experience building web applications
          using <em>JavaScript</em>, <em>React</em>, and <em>Node.js</em>. I specialize
          in crafting intuitive user interfaces and scalable solutions for both startups
          and enterprise clients. Beyond coding, I&apos;m passionate about mentoring teammates,
          solving complex problems, and collaborating on international projects that make
          an impact.
        </p>
        <Image src={omegaInclinedIcon} alt="" aria-hidden="true" className="absolute sm:static z-0" />
      </section>
      <section id="skills" aria-labelledby="skills-heading" className="bg-powder-400 dark:bg-slate-900 sm:px-32 sm:py-20 z-10 relative">
        <article className="flex flex-col items-center space-y-10 sm:rounded-3xl border-2 border-powder-600 dark:border-gold-500/30 bg-slate-900/20 dark:bg-navy/50 px-14 sm:px-24 py-10">
          <h3 id="skills-heading" className="text-4xl uppercase">Skills</h3>
          <hr className=" w-5/6 border-y-2" />
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-x-24 gap-y-12">
            <li className="relative rounded-2xl bg-gradient-to-br from-[#E1ED5C] to-[#757F00] px-6 py-16 overflow-hidden">
              <SiJavascript className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] opacity-20" />
              <h4 className="relative text-center text-2xl drop-shadow-lg z-10">
                JavaScript
              </h4>
            </li>
            <li className="relative rounded-2xl bg-gradient-to-br from-[#61df14] to-[#2D8803] px-6 py-16 overflow-hidden">
              <SiNodedotjs className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] opacity-20" />
              <h4 className="relative text-center text-2xl drop-shadow-lg z-10">NodeJS</h4>
            </li>
            <li className="relative rounded-2xl bg-gradient-to-br from-[#535353] to-[#343434] px-6 py-16 overflow-hidden">
              <SiGithub className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] opacity-20" />
              <h4 className="relative text-center text-2xl drop-shadow-lg z-10">GitHub</h4>
            </li>
            <li className="relative rounded-2xl bg-gradient-to-br from-[#04BEFE] to-[#4481EB] px-6 py-16 overflow-hidden">
              <SiReact className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] opacity-20" />
              <h4 className="relative text-center text-2xl drop-shadow-lg z-10">React</h4>
            </li>
            <li className="relative rounded-2xl bg-gradient-to-br from-[#7521FF] to-[#2C0EA6] px-6 py-16 overflow-hidden">
              <SiRedux className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] opacity-20" />
              <h4 className="relative text-center text-2xl drop-shadow-lg z-10">Redux</h4>
            </li>
            <li className="relative rounded-2xl bg-gradient-to-br from-[#F5990F] to-[#CB7E0C] px-6 py-16 overflow-hidden">
              <SiHtml5 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] opacity-20" />
              <h4 className="relative text-center text-2xl drop-shadow-lg z-10">HTML</h4>
            </li>
            <li className="relative rounded-2xl bg-gradient-to-br from-[#01C77F] to-[#017358] px-6 py-16 overflow-hidden">
              <SiVuedotjs className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] opacity-20" />
              <h4 className="relative text-center text-2xl drop-shadow-lg z-10">Vue</h4>
            </li>
            <li className="relative rounded-2xl bg-gradient-to-br from-[#C13FB4] to-[#7E177A] px-6 py-16 overflow-hidden">
              <SiSass className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] opacity-20" />
              <h4 className="relative text-center text-2xl drop-shadow-lg z-10">Sass</h4>
            </li>
          </ul>
        </article>
      </section>
      <section id="projects" aria-labelledby="projects-heading" className="bg-powder-400 dark:bg-slate-900 sm:px-32 sm:py-20">
        <article className="flex flex-col items-center space-y-10 sm:rounded-3xl border-2 border-powder-600 dark:border-gold-500/30 bg-slate-900/20 dark:bg-navy/50 px-14 sm:px-24 py-10">
          <h3 id="projects-heading" className="text-4xl uppercase">Projects</h3>
          <hr className="w-5/6 border-y-2" />
          <ul className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 - Augmented Staffing */}
            <li className="group relative rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-[url('../public/images/project-1.jpg')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent group-hover:from-slate-900/95 group-hover:via-slate-900/85 transition-all duration-500" />
              <div className="relative z-10 p-6 h-full flex flex-col justify-end min-h-[300px]">
                <h5 className="text-2xl font-bold mb-2 tracking-wide">Augmented Staffing</h5>
                <p className="text-sm text-gray-300 mb-3 line-clamp-2 group-hover:line-clamp-none transition-all">
                  Enterprise staffing platform connecting companies with remote talent worldwide.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2 py-1 bg-sky-600/50 rounded-full border border-sky-400/30">React</span>
                  <span className="text-xs px-2 py-1 bg-sky-600/50 rounded-full border border-sky-400/30">Node.js</span>
                  <span className="text-xs px-2 py-1 bg-sky-600/50 rounded-full border border-sky-400/30">Sass</span>
                </div>
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="flex-1 bg-gold-500 text-navy px-4 py-2 rounded-lg text-center font-semibold hover:bg-gold-600 transition-colors text-sm">
                    View Live
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-navy transition-all text-sm">
                    GitHub
                  </a>
                </div>
              </div>
            </li>

            {/* Project 2 - CrossClave */}
            <li className="group relative rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-[url('../public/images/project-2.jpg')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent group-hover:from-slate-900/95 group-hover:via-slate-900/85 transition-all duration-500" />
              <div className="relative z-10 p-6 h-full flex flex-col justify-end min-h-[300px]">
                <h5 className="text-2xl font-bold mb-2 tracking-wide">CrossClave</h5>
                <p className="text-sm text-gray-300 mb-3 line-clamp-2 group-hover:line-clamp-none transition-all">
                  Secure communication platform with end-to-end encryption for businesses.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2 py-1 bg-sky-600/50 rounded-full border border-sky-400/30">React.js</span>
                  <span className="text-xs px-2 py-1 bg-sky-600/50 rounded-full border border-sky-400/30">Ionic</span>
                  <span className="text-xs px-2 py-1 bg-sky-600/50 rounded-full border border-sky-400/30">Electron</span>
                  <span className="text-xs px-2 py-1 bg-sky-600/50 rounded-full border border-sky-400/30">Sass</span>
                  <span className="text-xs px-2 py-1 bg-sky-600/50 rounded-full border border-sky-400/30">GraphQL</span>
                </div>
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="https://crossclave.com/" target="_blank" rel="noopener noreferrer" className="flex-1 bg-gold-500 text-navy px-4 py-2 rounded-lg text-center font-semibold hover:bg-gold-600 transition-colors text-sm">
                    View Live
                  </a>
                </div>
              </div>
            </li>

            {/* Project 3 - Neobit */}
            <li className="group relative rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-[url('../public/images/project-3.jpg')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent group-hover:from-slate-900/95 group-hover:via-slate-900/85 transition-all duration-500" />
              <div className="relative z-10 p-6 h-full flex flex-col justify-end min-h-[300px]">
                <h5 className="text-2xl font-bold mb-2 tracking-wide">Neobit</h5>
                <p className="text-sm text-gray-300 mb-3 line-clamp-2 group-hover:line-clamp-none transition-all">
                  Asteroid tracking application featuring real-time data from NASA&apos;s Near Earth Object API.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2 py-1 bg-sky-600/50 rounded-full border border-sky-400/30">React</span>
                  <span className="text-xs px-2 py-1 bg-sky-600/50 rounded-full border border-sky-400/30">Redux</span>
                  <span className="text-xs px-2 py-1 bg-sky-600/50 rounded-full border border-sky-400/30">Sass</span>
                </div>
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* <a href="#" target="_blank" rel="noopener noreferrer" className="flex-1 bg-gold-500 text-navy px-4 py-2 rounded-lg text-center font-semibold hover:bg-gold-600 transition-colors text-sm">
                    View Live
                  </a> */}
                  <a href="#" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-navy transition-all text-sm">
                    GitHub
                  </a>
                </div>
              </div>
            </li>

            {/* Project 4 - Yelpcamp */}
            <li className="group relative rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-[url('../public/images/project-4.jpg')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent group-hover:from-slate-900/95 group-hover:via-slate-900/85 transition-all duration-500" />
              <div className="relative z-10 p-6 h-full flex flex-col justify-end min-h-[300px]">
                <h5 className="text-2xl font-bold mb-2 tracking-wide">Yelpcamp</h5>
                <p className="text-sm text-gray-300 mb-3 line-clamp-2 group-hover:line-clamp-none transition-all">
                  Community-driven campground review and booking platform.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2 py-1 bg-sky-600/50 rounded-full border border-sky-400/30">Node.js</span>
                  <span className="text-xs px-2 py-1 bg-sky-600/50 rounded-full border border-sky-400/30">Express</span>
                  <span className="text-xs px-2 py-1 bg-sky-600/50 rounded-full border border-sky-400/30">MongoDB</span>
                </div>
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* <a href="#" target="_blank" rel="noopener noreferrer" className="flex-1 bg-gold-500 text-navy px-4 py-2 rounded-lg text-center font-semibold hover:bg-gold-600 transition-colors text-sm">
                    View Live
                  </a> */}
                  <a href="#" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-navy transition-all text-sm">
                    GitHub
                  </a>
                </div>
              </div>
            </li>

            {/* Project 5 - Hi sitter */}
            <li className="group relative rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-[url('../public/images/project-5.jpg')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent group-hover:from-slate-900/95 group-hover:via-slate-900/85 transition-all duration-500" />
              <div className="relative z-10 p-6 h-full flex flex-col justify-end min-h-[300px]">
                <h5 className="text-2xl font-bold mb-2 tracking-wide">Hi sitter</h5>
                <p className="text-sm text-gray-300 mb-3 line-clamp-2 group-hover:line-clamp-none transition-all">
                  Babysitter sitter marketplace connecting families with trusted caregivers.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2 py-1 bg-sky-600/50 rounded-full border border-sky-400/30">React</span>
                  <span className="text-xs px-2 py-1 bg-sky-600/50 rounded-full border border-sky-400/30">Tailwind</span>
                  <span className="text-xs px-2 py-1 bg-sky-600/50 rounded-full border border-sky-400/30">Spring</span>
                </div>
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* <a href="#" target="_blank" rel="noopener noreferrer" className="flex-1 bg-gold-500 text-navy px-4 py-2 rounded-lg text-center font-semibold hover:bg-gold-600 transition-colors text-sm">
                    View Live
                  </a> */}
                  <a href="#" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-navy transition-all text-sm">
                    GitHub
                  </a>
                </div>
              </div>
            </li>

            {/* Project 6 - Wawa */}
            <li className="group relative rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-[url('../public/images/project-6.jpg')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent group-hover:from-slate-900/95 group-hover:via-slate-900/85 transition-all duration-500" />
              <div className="relative z-10 p-6 h-full flex flex-col justify-end min-h-[300px]">
                <h5 className="text-2xl font-bold mb-2 tracking-wide">Wawa</h5>
                <p className="text-sm text-gray-300 mb-3 line-clamp-2 group-hover:line-clamp-none transition-all">
                  Pet management platform for adoption services and lost pet recovery with community support.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2 py-1 bg-sky-600/50 rounded-full border border-sky-400/30">Next.js</span>
                  <span className="text-xs px-2 py-1 bg-sky-600/50 rounded-full border border-sky-400/30">Spring</span>
                  <span className="text-xs px-2 py-1 bg-sky-600/50 rounded-full border border-sky-400/30">Java</span>
                  <span className="text-xs px-2 py-1 bg-sky-600/50 rounded-full border border-sky-400/30">React.js</span>
                </div>
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* <a href="#" target="_blank" rel="noopener noreferrer" className="flex-1 bg-gold-500 text-navy px-4 py-2 rounded-lg text-center font-semibold hover:bg-gold-600 transition-colors text-sm">
                    View Live
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-navy transition-all text-sm">
                    GitHub
                  </a> */}
                </div>
              </div>
            </li>
          </ul>
        </article>
      </section>
      <section id="contact" aria-labelledby="contact-heading" className="backgroundRadial dark:text-white space-y-24 sm:px-96 sm:py-24 py-5">
        <h3 id="contact-heading" className="text-center text-4xl uppercase">Contact</h3>
        <article className="flex sm:justify-between space-y-8 flex-col sm:flex-row">
          <div className="space-y-5 text-center">
            <h3 className="text-4xl">Email</h3>
            <p>jose.4.abdiel@gmail.com</p>
          </div>
          <div className="space-y-5 text-center">
            <h3 className="text-4xl">Phone Number</h3>
            <p>MX (+52) 4492678272</p>
          </div>
        </article>
        <ul className="flex justify-center gap-6">
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/pepeloper/"
              rel="noopener noreferrer"
              aria-label="Visit Abdiel's LinkedIn profile (opens in new tab)"
            >
              <Image src={linkedinLogo} alt="" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/jabdi13"
              rel="noopener noreferrer"
              aria-label="Visit Abdiel's GitHub repositories (opens in new tab)"
            >
              <Image src={githubLogo} alt="" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href="mailto:jose.4.abdiel@gmail.com"
              aria-label="Send email to jose.4.abdiel@gmail.com"
            >
              <Image src={mailLogo} alt="" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://wa.me/524492678272?text=Hello,%20how%20are%20you?"
              rel="noopener noreferrer"
              aria-label="Contact via WhatsApp (opens in new tab)"
            >
              <Image src={phoneLogo} alt="" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
