import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"

const home = () => {
  return (
    <>
      <Layout>
        <SimpleHero>
          <Banner
            title="continue exploring"
            info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, natus."
          >
            <Link to="/tours" className="btn-white">
              explore tours
            </Link>
          </Banner>
        </SimpleHero>
      </Layout>
    </>
  )
}

export default home
