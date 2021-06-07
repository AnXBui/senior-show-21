import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Message from "../components/Message";
import Awards from "../components/Awards";
import Seniors from "../components/Seniors";
import SocialMedia from "../components/SocialMedia";
import Footer from "../components/Footer";
import SEO from "../components/seo";
import thumbnail from "../assets/thumbnail.png"


const Home = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        description="Welcome to the Graphic Design Senior Show 21!"
        image={thumbnail}
      />
      <Hero />
      <Message />
      {/* <Awards /> */}
      <Seniors />
      <SocialMedia />
      <Footer />
    </Layout>
  );
};
export default Home;

// ...GatsbyImageSharpFluid
