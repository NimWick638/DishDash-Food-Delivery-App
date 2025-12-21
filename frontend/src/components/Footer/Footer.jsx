import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className = "footer" id='footer'>
        <div className="footer-content">
        <div className = 'footer-content-left'>
            <img src={assets.logo}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates mollitia non iusto eveniet eos quaerat consequatur inventore sed porro, quis quos distinctio dolor ad modi obcaecati molestias ut esse exercitationem!</p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className = 'footer-content-center'>
            <h2>COMAPNY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>PrivcyPolicy</li>
            </ul>

        </div>
        <div className = 'footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+94 787545228</li>
                <li>contact@dishdash.com</li>
            
            </ul>
        </div>
        </div>
        <hr/>
        <p className="footer-copy-right">© 2024 DishDash. All rights reserved.</p>
    </div>
  )
}

export default Footer
