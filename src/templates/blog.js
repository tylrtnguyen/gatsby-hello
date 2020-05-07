import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Layout from '../components/layout'
import Head from '../components/head'

// The variable $slug will come from the context that we set up 
export const query = graphql`
    query ($slug: String!) {
        contentfulBlogPost (
            slug: {eq: $slug}
        ) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            postBody {
                json
            }
        }
    }
`

const Blog = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url} />
            }
        }
    }
    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title} />
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p><i>{props.data.contentfulBlogPost.publishedDate}</i></p>
            <hr></hr>
            {documentToReactComponents(props.data.contentfulBlogPost.postBody.json, options)}
        </Layout>
    )
}

export default Blog