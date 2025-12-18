import Image from "next/image";
import linkedinLogo from "../../public/linkedin-icon.svg";
import githubLogo from "../../public/github-icon.svg";
import mailLogo from "../../public/mail-icon.svg";
import phoneLogo from "../../public/phone-icon.svg";

interface SocialLinksProps {
  className?: string;
}

/**
 * Social Media Links Component
 *
 * Reusable component for displaying social media icons.
 * Used in both Hero section and Contact section.
 */
export function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <nav className={className} aria-label="Social media links">
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
  );
}
