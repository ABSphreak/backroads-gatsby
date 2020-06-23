import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const home = () => {
  return (
    <>
      {/* Using children prop in Layout to render */}
      <Layout>
        <div>
          <h1>Home Page</h1>
          <Link to="/blog/">Blog</Link>
        </div>
      </Layout>
    </>
  )
}

export default home
