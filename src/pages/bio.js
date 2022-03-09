import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'



const BioPage = ({ data }) => {
  return (
    <Layout pageTitle="bio">
      <StaticImage className="my-8" src="../images/backstage.png" />
      <div className="text-grey-500 font-poppins flex flex-col">
        
        <p>b. 1994</p>
        <a href="https://www.linkedin.com/in/lorenzoantei/">Linkedin</a>
        <a href="https://drive.google.com/drive/folders/1OGZLKMblQLfVO_BnKPkgSsfcFBdgzLRo?usp=sharing">CV</a>
        <div className="text-gray-500 italic flex flex-col">
          <div>"Simplicity is an asset, not a weakness...</div>
          <div>The smaller the idea the happier I am."</div> 
          <div>(Cory Arcangel)</div> 
        </div>
      </div>


      
    </Layout>
    
  )
}



export default BioPage
