import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as footerStyles from "./footer.module.scss"

export default function Footer() {

    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        author
                    }
                }
            }
        `
    )

    return (
        <footer className={footerStyles.siteFooter}>
            <div className={footerStyles.container}>
                <p>
                   This is a tutorial site &copy; { new Date().getFullYear().toString() } All rights reserved.
                </p>
            </div>
        </footer>
    )
}