import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './css/Footer.css'

const Footer = () => {
  return (
    <div className='flex'>
       
       <div>
         <div className='firstlist'>
              <FacebookOutlinedIcon/>
              <InstagramIcon/>
              <YouTubeIcon/>

        </div><br/>
        <li>Auto description</li><br/>
        <li>Invester Relations</li><br/>
        <li>Legal Notice</li><br/>
        <li>Service Code <br/>@2006 Netflix.loc </li>
       </div>

       <div>
        <li></li><br/><br/>
        <li>Help Center</li><br/>
        <li>Jobs</li><br/>
        <li>Cookie Preferences</li>
       </div>

       <div>
        <li></li><br/><br/>
        <li>Gift Cards</li><br/>
        <li>Terms of use</li><br/>
        <li>Corporate Information</li>
       </div>

       <div>
        <li></li><br/><br/>
        <li>Media Center</li><br/>
        <li>Privacy</li><br/>
        <li>Contact Us</li> 
       </div>

    </div>
  )
}

export default Footer;