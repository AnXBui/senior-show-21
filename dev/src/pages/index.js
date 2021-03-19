import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Message from "../components/Message"
import Awards from "../components/Awards"
import Seniors from "../components/Seniors"
// import Projects from "../components/Projects"
// import Blogs from "../components/Blogs"
export default () => {
  return <Layout>
    <Hero/>
    <Message/>
    <Awards/>
    <Seniors/>
  </Layout>
}
// ...GatsbyImageSharpFluid
