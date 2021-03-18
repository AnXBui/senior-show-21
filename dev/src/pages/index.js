import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Artworks from "../components/Artworks"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
export default () => {
  return <Layout>
    <Hero/>
    <Services/>
    <Artworks/>
  </Layout>
}
// ...GatsbyImageSharpFluid
