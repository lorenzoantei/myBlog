import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Latest works">
      <div className="flex justify-center pt-8">
        <div className='flex flex-col text-center space-y-8'>
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2 className="">
              <Link className="text-green-900 text-2xl hover:text-green-400 hover:ease-in-out duration-1000" to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p className='font-lato'>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
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
          date(formatString: "YYYY-MM-DD")
          title
        }
        id
        slug
      }
    }
  }
`

export default BlogPage
