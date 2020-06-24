import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { FaAdobe } from "react-icons/fa"

const home = () => {
  return (
    <>
      {/* Using children prop in Layout to render */}
      <Layout>
        <div>BACKROADS</div>
        <FaAdobe />
      </Layout>
    </>
  )
}

export default home
