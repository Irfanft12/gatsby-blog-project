import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default function NotFound() {
    return (
        <Layout>
            <h1>404: page not found</h1>
            <p>
                <Link to="/blog/">Check our latest articles</Link>
            </p>
        </Layout>
    )
}