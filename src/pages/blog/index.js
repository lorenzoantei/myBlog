import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="latest works">
      {
        data.allMdx.nodes.map(node => (
          <div className='px-48'>
          
          <article key={node.id} className='py-6'>

          <h2 className="text-gray-600 text-xl hover:text-blue-400 hover:ease-in-out duration-1000">
            <Link to={`/blog/${node.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>

          <p className='font-lato text-gray-400'>Posted: {node.frontmatter.date}</p>
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

export default BlogPage