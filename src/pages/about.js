import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

export default function About() {
    return (
        <Layout>
            <Metadata title="About" description="This is about page" />
            <h1>About page</h1>
            <p>Information about company can go here.</p>
        </Layout>
    )
}