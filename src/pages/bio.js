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

      </div>


      
    </Layout>
    
  )
}



export default BioPage
