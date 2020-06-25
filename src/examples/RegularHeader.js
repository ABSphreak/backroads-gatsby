import React from "react"
import { StaticQuery, graphql } from "gatsby"

const getSiteData = graphql`
  # it can be named or unnamed
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const RegularHeader = () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={data => {
        console.log(data)
        return (
          <>
            <h1>title: {data.site.siteMetadata.title}</h1>
            <h1>title: {data.site.siteMetadata.author}</h1>
          </>
        )
      }}
    />
  )
}

export default RegularHeader
