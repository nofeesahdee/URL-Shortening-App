import React from 'react'
import logo from '../images/logo2.svg'
import { FaFacebookSquare, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <footer>
        <div className="container footer-con">
        <div className='footer-logo'><img src={logo} alt="logo" /></div>
        <div className='links'>
            <div className='link-tag'>
                <h4>Features</h4>
                <ul>
                    <li>Link Shortening</li>
                    <li>Branded Links</li>
                    <li>Analytics</li>
                </ul>
            </div>
            <div className='link-tag'>
                <h4>Resources</h4>
                <ul>
                    <li>Blog</li>
                    <li> Developers</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className='link-tag'>
                <h4>Company</h4>
                <ul>
                    <li>About</li>
                    <li> Our Team</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
        <div className='icons'>
            <FaFacebookSquare />
            <FaTwitter />
            <FaPinterest />
            <FaInstagram />
        </div>
        </div>
    </footer>
  )
}

export default Footer
