import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const BioPage = ({ data }) => {
  return (
    <Layout pageTitle="bio">

      <div className="text-gray-500 font-poppins space-y-4">
      
        <div><StaticImage className="" src="../images/backstage.png" /></div>
      
        <div><p>b. 1994</p></div>
        
        <div><p>Currently based in La Spezia (it).</p></div>
        
        <div><a className="hover:text-black hover:ease-in-out duration-1000 hover:underline" href="https://drive.google.com/drive/folders/1OGZLKMblQLfVO_BnKPkgSsfcFBdgzLRo?usp=sharing">CV</a></div>
        
        <div id="social" className="flex flex-col space-y-4 pt-6">
          <a className="hover:text-black hover:ease-in-out duration-1000 hover:underline" href="mailto:lorenzoantei@pr.me">email</a>
          <a className="hover:text-black hover:ease-in-out duration-1000 hover:underline" href="https://t.me/lorenzoantei">Telegram</a>
          <a className="hover:text-black hover:ease-in-out duration-1000 hover:underline" href="https://www.linkedin.com/in/lorenzoantei/">Linkedin</a>
          <a className="hover:text-black hover:ease-in-out duration-1000 hover:underline" href="https://www.facebook.com/lorenzoanteilorenzo">FB</a>
          <a className="hover:text-black hover:ease-in-out duration-1000 hover:underline" href="https://www.instagram.com/lorenzo.antei/">IG</a>
          <a className="hover:text-black hover:ease-in-out duration-1000 hover:underline" href="https://www.youtube.com/channel/UCKJORbTpAAIHWyU3Rq0A_Xg">YT</a>
          <a className="hover:text-black hover:ease-in-out duration-1000 hover:underline" href="https://vimeo.com/user115048394">Vimeo</a>
          <a className="hover:text-black hover:ease-in-out duration-1000 hover:underline" href="https://github.com/lorenzoantei/">Github</a>
          <a className="hover:text-black hover:ease-in-out duration-1000 hover:underline" href="https://openprocessing.org/user/224445?view=activity">Openprocessing</a>
          <a className="hover:text-black hover:ease-in-out duration-1000 hover:underline" href="https://codepen.io/loranto">Codepen</a>
        </div>

        <div className="text-gray-400 italic flex flex-col">
          <div>"Simplicity is an asset, not a weakness...</div>
          <div>The smaller the idea the happier I am."</div> 
          <div className="pt-3">(Cory Arcangel)</div> 
        </div>

        <div><Link to={`/`}>goTo home</Link></div> 
      
      </div>

           
    </Layout>
    
  )
}



export default BioPage
