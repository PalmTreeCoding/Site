import React from 'react'

import Root from '../components/Root'
import Header from '../components/Header'
import Hero from '../components/Hero'
// import Clients from '../components/Clients'
import WaysWeCanHelp from '../components/WaysWeCanHelp'
import Footer from '../components/Footer'

export const Home = () => (
  <Root>
    <Header />

    <Hero />

    <WaysWeCanHelp />

{/*    <Clients />*/}

    <Footer />

  </Root>
)

export default Home
