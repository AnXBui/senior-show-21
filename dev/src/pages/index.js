import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Message from "../components/Message";
import Awards from "../components/Awards";
import Seniors from "../components/Seniors";
import SocialMedia from "../components/SocialMedia";
import SEO from "../components/seo";

// import Projects from "../components/Projects"
// import Blogs from "../components/Blogs"
const Home = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        description="Welcome to the Graphic Design Senior Show 21!"
      />
      <Hero />
      <Message />
      <Awards />
      <Seniors />
      <SocialMedia />
    </Layout>
  );
};
export default Home;

// ...GatsbyImageSharpFluid
