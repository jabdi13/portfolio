import Image from "next/image";
import linkedinLogo from "../public/linkedin-icon.svg";
import githubLogo from "../public/github-icon.svg";
import mailLogo from "../public/mail-icon.svg";
import phoneLogo from "../public/phone-icon.svg";
import alphaIcon from "../public/alpha-icon.svg";
import photoBG from "../public/photo-bg.png";

export default function Home() {
  return (
    <>
      <section id="home" className="backgroundRadial relative h-screen">
        <h1 className="mainTitle absolute right-8 top-14 text-9xl">Abdiel</h1>
        <article className="absolute left-28 top-2/4 w-5/12 -translate-y-2/4 space-y-10">
          <h2 className="text-6xl">
            Software
            <br />
            Developer
          </h2>
          <p>
            Hello! my name is <strong>Abdiel Ortega</strong>. I have over 4
            years of experience developing web applications and I love sharing
            knowledge.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-xl bg-amber-400 px-8 py-3.5 text-xl text-sky-700 shadow"
          >
            Contact
          </a>
        </article>
        <nav className="absolute bottom-14 left-28">
          <ul className="flex gap-7">
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/pepeloper/">
                {" "}
                <Image src={linkedinLogo} alt="LinkedIn logo" />{" "}
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/abdielDev">
                <Image src={githubLogo} alt="GitHub logo" />
              </a>
            </li>
            <li>
              <a href="mailto:jose.4.abdiel@gmail.com">
                <Image src={mailLogo} alt="Mail logo" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://wa.me/524492678272?text=Hello,%20how%20are%20you?"
              >
                <Image src={phoneLogo} alt="Phone logo" />
              </a>
            </li>
          </ul>
        </nav>
        <figure>
          <Image
            className=" absolute bottom-0 right-0 w-1/3 saturate-0"
            src={photoBG}
            alt="Professional posing"
          />
        </figure>
      </section>
      <section
        id="about"
        className="flex items-center justify-around bg-sky-600"
      >
        <h3 className="text-4xl uppercase">About</h3>
        <p className=" w-2/5 text-justify">
          Hello! my name is <strong>Abdiel Ortega</strong> I am from
          Aguascalientes México. I have four years of experience in web
          development (<em>Frontend</em> and <em>Backend</em>) with{" "}
          <em>JavaScript</em> I have Soft skills to work as a team like
          trainning colleagues, solving problems, and communication. This has
          allowed me collaboration in international projects.
        </p>
        <Image src={alphaIcon} alt="Alpha icon" />
      </section>
      <section id="skills" className="bg-sky-500 px-32 py-20">
        <article className="flex flex-col items-center space-y-10 rounded-3xl border-2 border-sky-600 bg-slate-900/20 px-24 py-10">
          <h3 className="text-4xl uppercase">Skills</h3>
          <hr className=" w-5/6 border-y-2" />
          <ul className="grid grid-cols-4 gap-x-24 gap-y-12">
            <li className="rounded-2xl bg-gradient-to-br from-[#BCCB0C] to-[#BCCB0C] px-6 py-16">
              <h4 className="text-center text-2xl drop-shadow-lg">
                JavaScript
              </h4>
            </li>
            <li className="rounded-2xl bg-gradient-to-br from-[#61df14] to-[#2D8803] px-6 py-16">
              <h4 className="text-center text-2xl drop-shadow-lg">NodeJS</h4>
            </li>
            <li className="rounded-2xl bg-gradient-to-br from-[#535353] to-[#343434] px-6 py-16">
              <h4 className="text-center text-2xl drop-shadow-lg">GitHub</h4>
            </li>
            <li className="rounded-2xl bg-gradient-to-br from-[#04BEFE] to-[#4481EB] px-6 py-16">
              <h4 className="text-center text-2xl drop-shadow-lg">React</h4>
            </li>
            <li className="rounded-2xl bg-gradient-to-br from-[#7521FF] to-[#2C0EA6] px-6 py-16">
              <h4 className="text-center text-2xl drop-shadow-lg">Redux</h4>
            </li>
            <li className="rounded-2xl bg-gradient-to-br from-[#F5990F] to-[#CB7E0C] px-6 py-16">
              <h4 className="text-center text-2xl drop-shadow-lg">HTML</h4>
            </li>
            <li className="rounded-2xl bg-gradient-to-br from-[#01C77F] to-[#017358] px-6 py-16">
              <h4 className="text-center text-2xl drop-shadow-lg">Vue</h4>
            </li>
            <li className="rounded-2xl bg-gradient-to-br from-[#C13FB4] to-[#7E177A] px-6 py-16">
              <h4 className="text-center text-2xl drop-shadow-lg">Sass</h4>
            </li>
          </ul>
        </article>
      </section>
      <section id="projects" className="bg-sky-500 px-32 py-20">
        <article className="flex flex-col items-center space-y-10 rounded-3xl border-2 border-sky-600 bg-slate-900/20 px-24 py-10">
          <h3 className="text-4xl uppercase">Projects</h3>
          <hr className="w-5/6 border-y-2" />
          <ul className="grid w-full grid-cols-3 gap-4">
            <li className=" relative rounded-xl bg-[url('../public/images/project-1.jpg')] bg-cover px-10 py-16 shadow-xl transition duration-500 hover:scale-110">
              <div className="absolute inset-0 z-10 flex w-full items-center justify-center rounded-xl transition duration-500 hover:bg-slate-800/70">
                <h5 className="relative z-20 text-center text-2xl tracking-widest">
                  Augmented Staffing
                </h5>
              </div>
            </li>
            <li className="relative rounded-xl bg-[url('../public/images/project-2.jpg')] bg-cover px-10 py-16 shadow-xl transition duration-500 hover:scale-110">
              <div className="absolute inset-0 z-10 flex w-full items-center justify-center rounded-xl transition duration-500 hover:bg-slate-800/70">
                <h5 className="relative z-20 text-center text-2xl tracking-widest">
                  CrossClave
                </h5>
              </div>
            </li>
            <li className="relative rounded-xl bg-[url('../public/images/project-3.jpg')] bg-cover px-10 py-16 shadow-xl transition duration-500 hover:scale-110">
              <div className="absolute inset-0 z-10 flex w-full items-center justify-center rounded-xl transition duration-500 hover:bg-slate-800/70">
                <h5 className="relative z-20 text-center text-2xl tracking-widest">
                  Neobit
                </h5>
              </div>
            </li>
            <li className="relative rounded-xl bg-[url('../public/images/project-4.jpg')] bg-cover px-10 py-16 shadow-xl transition duration-500 hover:scale-110">
              <div className="absolute inset-0 z-10 flex w-full items-center justify-center rounded-xl transition duration-500 hover:bg-slate-800/70">
                <h5 className="relative z-20 text-center text-2xl tracking-widest">
                  Yelpcamp
                </h5>
              </div>
            </li>
            <li className="relative rounded-xl bg-[url('../public/images/project-5.jpg')] bg-cover px-10 py-16 shadow-xl transition duration-500 hover:scale-110">
              <div className="absolute inset-0 z-10 flex w-full items-center justify-center rounded-xl transition duration-500 hover:bg-slate-800/70">
                <h5 className="relative z-20 text-center text-2xl tracking-widest">
                  Hi sitter
                </h5>
              </div>
            </li>
            <li className="relative rounded-xl bg-[url('../public/images/project-6.jpg')] bg-cover px-10 py-16 shadow-xl transition duration-500 hover:scale-110">
              <div className="absolute inset-0 z-10 flex w-full items-center justify-center rounded-xl transition duration-500 hover:bg-slate-800/70">
                <h5 className="relative z-20 text-center text-2xl tracking-widest">
                  Wawa
                </h5>
              </div>
            </li>
          </ul>
        </article>
      </section>
      <section id="contact" className="backgroundRadial space-y-24 px-96 py-24">
        <h3 className="text-center text-4xl uppercase">Contact</h3>
        <article className="flex justify-between">
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
            <a target="_blank" href="https://www.linkedin.com/in/pepeloper/">
              {" "}
              <Image src={linkedinLogo} alt="LinkedIn logo" />{" "}
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/abdielDev">
              <Image src={githubLogo} alt="GitHub logo" />
            </a>
          </li>
          <li>
            <a href="mailto:jose.4.abdiel@gmail.com">
              <Image src={mailLogo} alt="Mail logo" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://wa.me/524492678272?text=Hello,%20how%20are%20you?"
            >
              <Image src={phoneLogo} alt="Phone logo" />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
