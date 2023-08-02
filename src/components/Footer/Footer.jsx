import React from 'react'
import './Footer.scss'

import { IconContext } from 'react-icons'
import { FaTwitter, FaFlickr, FaRavelry, FaYoutube, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa6'

const SocialIcon = ({link, icon}) => {
  return (
    <a href={link} target='_blank' rel='noreferrer'>
      <IconContext.Provider value={{className:'footer__socials__icon'}}>
        {icon}
      </IconContext.Provider>
    </a>
  )
}

function Footer() {
  return (
    <div>
      <section className='footer'>
        <div className='footer__socials'>
          <SocialIcon link='https://twitter.com/EskoPoutanen' icon={<FaTwitter />} />
          <SocialIcon link='https://www.flickr.com/photos/solmuteoriaa/' icon={<FaFlickr />} />
          <SocialIcon link='https://www.instagram.com/solmuteoriaa/' icon={<FaInstagram />} />
          <SocialIcon link='https://www.ravelry.com/designers/solmuteoriaa' icon={<FaRavelry />} />
          <SocialIcon link='https://www.youtube.com/@solmuteoriaa4383' icon={<FaYoutube />} />
          <SocialIcon link='https://www.linkedin.com/in/eskopoutanen/' icon={<FaLinkedin />} />
          <SocialIcon link='https://github.com/Solaxi/' icon={<FaGithub />} />
        </div>
        <p className="footer__copyrights-text">Copyright &copy; {new Date().getFullYear()} Solmuteoriaa. All Rights Reserved.</p>
      </section>
      
    </div>
  )  
}

export default Footer