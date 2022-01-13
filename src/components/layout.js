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
    <div className="pt-4">

      <title>{pageTitle} | {data.site.siteMetadata.title}</title>

      <header id="{siteTitle}" className="font-poppins text-2xl flex justify-center ">
        <Link to="/" className="hover:text-purple-700 hover:ease-in-out duration-1000">{data.site.siteMetadata.title}</Link>
      </header>
      
      <nav className="flex justify-center">
        <ul className="flex flex-row space-x-4">
          <li className="">
            <Link to="/about" className="hover:text-orange-700 hover:ease-in-out duration-1000">
              About
            </Link>
          </li>
          <li className="hover:text-green-700 hover:ease-in-out duration-1000">
            <Link to="/blog" className="">
              Blog
            </Link>
          </li>
        </ul>
      </nav>

      <main className='pt-8'>
        <h1 className="text-2xl text-red-700 flex justify-center">{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
