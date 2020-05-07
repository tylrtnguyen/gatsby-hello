import React from 'react';
import Layout from '../components/layout'
import Head from '../components/head'
import { useStaticQuery, graphql, Link } from 'gatsby'
import blogStyles from './blog.module.scss'

const Blog = () => {
    const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields: publishedDate,
          order :DESC
        }
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString:"MMMM Do, YYYY")
          }
        }
      }
    }
    `)



    return (
        <Layout>
            <Head title="Blog" />
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((post, index) => {
                  return ( <li className={blogStyles.post} key={index}>
                          <Link to={"blog/"+post.node.slug}>
                            <h2>{post.node.title}</h2>
                            <p><b>Publish date:</b> {post.node.publishedDate}</p>
                          </Link>
                          <hr></hr>
                  </li> )
                  })}
            </ol>
        </Layout>
    )
}

export default Blog