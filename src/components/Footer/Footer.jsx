import React from 'react'
import './Footer.scss'

import { IconContext } from 'react-icons'
import { FaTwitter, FaFlickr, FaRavelry, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa6'

function Footer() {
  return (
    <div>
      <section className='footer'>
        <div className='footer__socials'>
          <a href='https://twitter.com/EskoPoutanen' target='_blank' rel='noreferrer'>
            <IconContext.Provider value={{title:'Twitter', size:'10em', color:'black', className:'footer__socials__icon'}}>
              <FaTwitter />
            </IconContext.Provider>
          </a>
          <a href='https://www.flickr.com/photos/solmuteoriaa/' target='_blank' rel='noreferrer'>
            <IconContext.Provider value={{title:'Flickr', size:'10em', color:'black', className:'footer__socials__icon'}}>
              <FaFlickr />
            </IconContext.Provider>
          </a>
          <a href='https://www.ravelry.com/designers/solmuteoriaa' target='_blank' rel='noreferrer'>
            <IconContext.Provider value={{title:'Ravelry', size:'10em', color:'black', className:'footer__socials__icon'}}>
              <FaRavelry />
            </IconContext.Provider>
          </a>
          <a href='https://www.youtube.com/@solmuteoriaa4383' target='_blank' rel='noreferrer'>
            <IconContext.Provider value={{title:'YouTube', size:'10em', color:'black', className:'footer__socials__icon'}}>
              <FaYoutube />
            </IconContext.Provider>
          </a>
          <a href='https://www.linkedin.com/in/eskopoutanen/' target='_blank' rel='noreferrer'>
            <IconContext.Provider value={{title:'LinkedIn', size:'10em', color:'black', className:'footer__socials__icon'}}>
              <FaLinkedin />
            </IconContext.Provider>
          </a>
          <a href='https://github.com/Solaxi/' target='_blank' rel='noreferrer'>
            <IconContext.Provider value={{title:'GitHub', size:'10em', color:'black', className:'footer__socials__icon'}}>
              <FaGithub />
            </IconContext.Provider>
          </a>
        </div>
        <p className="footer__copyrights-text">Copyright © {new Date().getFullYear()} Solmuteoriaa. All Rights Reserved.</p>
      </section>
      
    </div>
  )  
}

export default Footer