import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  heading,
  siteTitle,
} from './layout.module.css' //da sostituire con tailwind

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

      <title>{pageTitle} | {data.site.siteMetadata.title}</title>

      <div className='flex flex-row items-center justify-between font-poppins'>

      <header id="{siteTitle}" className="text-2xl">
        <Link to="/" className="hover:text-purple-700 hover:ease-in-out duration-1000">{data.site.siteMetadata.title}</Link>
      </header>
      <nav className="">
        <ul className="flex flex-row space-x-4 md:space-x-8 text-sm md:text-base">

          <li className="hover:text-blue-700 hover:ease-in-out duration-1000 ">
            <Link to="/blog" className="">
              latest works
            </Link>
          </li>
          <li className="hover:text-blue-700 hover:ease-in-out duration-1000">
            <Link target="_blank" to="https://lorenzoanteiportfolio.netlify.app/">
              Portfolio
            </Link>
          </li>

        </ul>
      </nav>

      </div>

      <main className='pt-8'>
        <h1 className="text-2xl text-blue-600 text-center">{pageTitle}</h1>
        
        <div className='py-8'>{children}</div>
      </main>

    </div>
  )
}

export default Layout
