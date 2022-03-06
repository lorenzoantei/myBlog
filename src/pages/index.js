import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="home">
      
      <div className="text-grey-500 font-poppins">
        <p>I'm a digital media maker.</p>
        <p>Since 2016 I have been making photostories, recording videos and trying to do stuff with JS. I study at the Academy of Fine Arts in Carrara and work around Italy.</p>
      </div>

      <StaticImage className="my-8" src="../images/sb_omen_v20034.jpg" />
        
    </Layout>
  )
}

export default IndexPage
