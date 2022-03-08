import * as React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'



const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="home">
      <div className="text-grey-500 font-poppins">
        <p>I'm a digital media maker.</p>
        <p>Since 2016 I have been making photostories, recording videos and trying to do stuff with JS. I study at the Academy of Fine Arts in Carrara and work around Italy.</p>
      </div>

      <StaticImage className="my-8" src="../images/sb_omen_v20034.jpg" />


      {
        data.allMdx.nodes.map(node => (
          <div className=''>
          
          <article key={node.id} className='py-6'>

          <h2 className="text-gray-600 text-xl hover:text-black hover:ease-in-out duration-1000">
            <Link to={`/blog/${node.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>

          <p className='font-lato text-gray-400 text-sm'>{node.frontmatter.date}</p>
        </article>
        

        </div>
        ))
        
      }
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
