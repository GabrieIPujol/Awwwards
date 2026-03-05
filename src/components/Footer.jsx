import { CiMail } from "react-icons/ci"
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"

const links = [
  { href: 'www.linkedin.com/in/gabriel-pujol-073577300', icon: <FaLinkedin/>},
  { href: 'https://github.com/GabrieIPujol', icon: <FaGithub/>},
  { href: 'www.instagram.com/biel_pujol', icon: <FaInstagram/>},
  { href: 'tel:+5511957299485', icon: <FaWhatsapp/>},
  { href: 'mailto:gabriel.pagvelosa@gmail.com', icon: <CiMail/>},
]

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5320EF] py-4 text-black">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flow-row">
          <p className="text-center text-sm md:text-left">
            &copy; Gabriel Pujol 2026. All rights reserved 
          </p>
          <div className="flex justify-center gap-4 md:justify-start">
            {links.map((link) => (
              <a key={link} href={link.href} target="_blank" rel="noopener noreferrer" className="text-black transition-colors duration-500 ease-in-out hover:text-white">{link.icon}</a>
            ))}
          </div>
          <a href="#privacy-policy" className="text-center text-sm hover:underline md:text-right">Privacy Policy</a>
        </div>
    </footer>
  )
}

export default Footer