import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

export default function Index() {
  return (
    <Layout>
      <Metadata title="Home" description="This is home page" />
      <h1>Home page</h1>
      <p>Gatsby Tutorial</p>
    </Layout>
  )
}
