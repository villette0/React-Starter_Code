import React from 'react'
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (    
    <div>
    <Helmet>
    <title>About</title>
    <meta name='description' content='About' />
    </Helmet>

        <h2>About goes here</h2>
    
    </div>
  )
}

export default About