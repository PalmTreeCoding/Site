import React from 'react'
import { Main} from 'next/document'

import CustomHead from '../modules/CustomHead'
import JssDocument from '../modules/JssDocument'

/**
 * Renders a static document without any of the next / js / css scripts
 */
class StaticDocument extends JssDocument {

  render() {
    return (
      <html>
      <CustomHead />

      <body>
      <Main />
      </body>

      </html>
    )
  }
}

/**
 * In production we only need a static page, for development we need everything
 */
export default process.env.NODE_ENV === 'production' ? StaticDocument : JssDocument

