import * as React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'



const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="home">
      <div className="text-grey-500 font-poppins">
        <p>I'm a digital media maker.</p>
        <p>Since 2016 I have been making photostories, recording videos and trying to do stuff with JS. Actually I'm studing at Accademia di Belle Arti di Carrara (<a href="https://www.accademiacarrara.it/it/scuole/nuove-tecnologie-dellarte">Nuove tecnologie dell'arte</a>) and I'm based in La Spezia (it).</p>
      </div>

      <StaticImage className="my-8 animate-fadeout" src="../images/sb_omen_v20034.jpg" />

      <h3 className="font-poppins text-2xl text-gray-500">Latest experiences</h3>


      { data.allMdx.nodes.map(node => (
          <div className=''>
          
          <article key={node.id} className='py-6'>

          <h2 className="text-gray-400 text-xl hover:text-black hover:ease-in-out duration-1000">
            <Link className="hover:underline" to={`/blog/${node.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>

          <p className='font-lato text-gray-400 text-sm'>{node.frontmatter.date}</p>

        </article>
        

        </div>
        )) }
        
      <div className="border-t-2 stroke-gray-300 my-6">
        <div className="flex flex-col text-gray-300 text-lg my-6 space-y-3">

         <div className="flex flex-row space-x-6">
            <Link to={`/bio`}>
              <div className="hover:text-black hover:ease-in-out duration-1000 hover:underline">bio</div>
            </Link>

            <div className="hover:text-black hover:ease-in-out duration-1000 hover:underline">
              <Link className="hover:underline" to={`/cv`}>CV</Link>
            </div>

            <Link to={`/live`}>
              <div className="hover:text-black hover:ease-in-out duration-1000 hover:underline">live report</div>
            </Link>
         </div>

          <div className="flex flex-row space-x-6">
            <div className="hover:text-black hover:ease-in-out duration-1000 hover:underline"><a href="mailto:lorenzoantei@pr.me">email</a></div>
          
            <div className="hover:text-black hover:ease-in-out duration-1000 hover:underline"><a href="t.me/lorenzoantei">telegram</a></div>
          </div>
        
        </div>
      </div>
    </Layout>
    
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default IndexPage
