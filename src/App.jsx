import React, {useState} from "react";

import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from "react-helmet";

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./style.css"
// import logo from './logo.svg';

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const handleChange = () => {
    if (currentPage === "Home") {
      return <Home/>
    }
    if (currentPage === "About") {
      return <About/>
    } 
    if (currentPage === "Contact") {
      return <Contact/>
    }
  };
  return (
    <div>
      <Helmet>
        <title>Website Title</title>
        <meta name="description" content="Placeholder"/>
        <meta name="keywords" content="keyword placeholder,keyword placeholder"/>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <link
        rel="icon"
        sizes="192x192"
        href="%PUBLIC_URL%/android-chrome-192X192.png"
      />
      <link
        rel="icon"
        sizes="512x512"
        href="%PUBLIC_URL%/android-chrome-512X512.png"
      />
        <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="%PUBLIC_URL%/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="%PUBLIC_URL%/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="%PUBLIC_URL%/favicon-16x16.png"
      />
      <link rel="manifest" href="%PUBLIC_URL%/site.webmanifest" />
      </Helmet>

        <HelmetProvider>
        <Navigation setCurrentPage={setCurrentPage}/>
        {handleChange()}
        <Footer setCurrentPage={setCurrentPage}/>
        </HelmetProvider>
    </div>
  );
}

export default App;
