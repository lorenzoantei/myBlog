import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import "@fontsource/poppins"
import "@fontsource/lato"

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container mx-auto pt-12 
    2xl:px-80 xl:px-60 lg:px-24 md:px-6 px-4
    ">

      <title>{data.site.siteMetadata.title}/{pageTitle}/</title>

      <header id="{siteTitle}">
          <Link to="/" className="font-poppins text-3xl">{data.site.siteMetadata.title}</Link>
        </header>

      <main className='pt-8'>
        <div className='py-8'>
          {children}
        </div>
      </main>

      
      <div className="pt-12 pb-24"><Link to={`/`}>goTo home</Link></div> 



    </div>
  )
}

export default Layout
