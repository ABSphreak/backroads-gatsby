import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import RegularHeader from "../examples/RegularHeader"
import Images from "../examples/Images"

const test = () => {
  return (
    <Layout>
      <Centered>
        <h1>Test Page</h1>
        <RegularHeader />
      </Centered>
      <Images />
    </Layout>
  )
}

const Centered = styled.div`
  text-align: center;
`

export default test
