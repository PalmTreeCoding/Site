import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from 'react-jss'

import ResetJSS from '../ResetJSS'
import Theme from '../../modules/Theme'

export const Root = ({ children }) => (
  <ThemeProvider theme={Theme}>
    <ResetJSS>

      <Head>
        <link
          href={'https://fonts.googleapis.com/css?family=Quicksand:300,400,700&subset=latin-ext'}
          rel={'stylesheet'}
          type={'text/css'} />

        <link rel={'shortcut icon'} href={'/static/favicon.ico'} />
        <meta name={'viewport'} content={'width=device-width, initial-scale=1.0'} />

        <title>Palm Tree Coding</title>
        <meta name={'theme-color'} content={'#ffffff'} />
        <meta name={'description'} content={'When standard software does not meet your requirements, we can assist you in consulting, building, hosting and managing custom solutions. So you can just sit back and relax (or focus on what makes your business grow).'} />

        <meta property={'og:site_name'} content={'Palm Tree Coding'} />
        <meta property={'og:title'} content={'Palm Tree Coding'} />
        <meta property={'og:description'} content={'When standard software does not meet your requirements, we can assist you in consulting, building, hosting and managing custom solutions. So you can just sit back and relax (or focus on what makes your business grow).'} />
        <meta property={'og:type'} content={'website'} />
        <meta property={'og:image'} content={'/static/images/banner.png'} />
      </Head>

      {children}

    </ResetJSS>
  </ThemeProvider>
)

Root.propTypes = {

  /**
   * The content of the component.
   */
  children: PropTypes.node.isRequired,

}

export default Root
