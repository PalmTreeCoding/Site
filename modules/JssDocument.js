import React from 'react'
import { SheetsRegistry, JssProvider } from 'react-jss'
import Document from 'next/document'

import collapseWhitespace from '../utils/collapseWhitespace'

/**
 * Wraps the app with JssProvider
 */
export default class JssDocument extends Document {

  static async getInitialProps(ctx) {
    const registry = new SheetsRegistry()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () => (
      originalRenderPage({
        enhanceApp: App => props => (
          <JssProvider registry={registry}>
            <App {...props} />
          </JssProvider>
        ),
      })
    )

    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...(initialProps || {}),
      styles: (
        <>
          {initialProps.styles}
          <style
            id='server-side-styles'
            dangerouslySetInnerHTML={{ __html: collapseWhitespace(registry.toString()) }} />
        </>
      ),
    }
  }

}
