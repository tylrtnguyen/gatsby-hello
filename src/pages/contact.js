import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
        <Head title="Contact" />
            <h1>Let's get in touch</h1>
            <p>My name is Thong Ba Nguyen</p>
            <p>Need me? <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Visit Me</a></p>
        </Layout>
    )
}

export default ContactPage