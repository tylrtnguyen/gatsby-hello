import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import footerStyles from './modules/footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <div className={footerStyles.footer}>
            Created By {data.site.siteMetadata.author}, &copy; 2019
        </div>
    )
}

export default Footer