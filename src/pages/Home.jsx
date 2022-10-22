import React from 'react'
import { Helmet } from 'react-helmet-async';


const Home = () => {
  return (
    <div>
    <Helmet>
    <title>Home</title>
    <meta name='description' content='Home' />
    </Helmet>

    <h2>Home goes here</h2>
    </div>
  )
}

export default Home


