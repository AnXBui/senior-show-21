import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Message from "../components/Message"
import Awards from "../components/Awards"
import Seniors from "../components/Seniors"
// import Projects from "../components/Projects"
// import Blogs from "../components/Blogs"
const Home = () => {
  return <div>
  <Hero/>
  <Message/>
  <Awards/>
  <Seniors/>
</div>
}
export default Home



// ...GatsbyImageSharpFluid
