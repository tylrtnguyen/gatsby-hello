import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About Me</h1>
            <p>My name is Thong Ba Nguyen</p>
            <p>Need a teammate? <Link to="/contact">Hello</Link></p> 
        </Layout>    
    )
}

export default AboutPage