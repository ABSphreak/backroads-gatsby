import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const home = () => {
  return (
    <>
      {/* Using children prop in Layout to render */}
      <Layout>
        <div>BACKROADS</div>
      </Layout>
    </>
  )
}

export default home
