import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Hero from "../components/hero"
import Content from "../components/content"
import CallToAction from "../components/cta"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Header />
    <Hero />
    <Content />
    <CallToAction />
    <Footer />
  </Layout>
)

export default IndexPage
