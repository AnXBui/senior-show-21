import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Seniors from "../components/Seniors"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
export default () => {
  return <Layout>
    <Hero/>
    <Services/>
    <Seniors/>
  </Layout>
}
// ...GatsbyImageSharpFluid
