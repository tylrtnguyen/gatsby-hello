import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const HomePage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <h1>Hello World!</h1>
            <h3>My name is Thong Ba Nguyen - a Full Stack Developer based in Toronto</h3>
            <p>Need another developer? <Link to="/contact" >Contact Me.</Link></p>
        </Layout>
    )
}

export default HomePage
