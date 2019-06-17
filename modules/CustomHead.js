import React from 'react'
import { Head } from 'next/document'

/**
 * Only used in production, removes all the scripts and links next adds.
 * We only need the pure html files nothing
 */
export default class CustomHead extends Head {

  render() {
    const res = super.render()

    function transform(node) {
      // remove all link preloads
      if (node && node.type === 'link' && node.props && node.props.rel === 'preload') {
        return null
      }

      if (node && node.props && node.props.children) {
        return {
          ...node,
          props: {
            ...node.props,
            children: Array.isArray(node.props.children)
              ? node.props.children.map(transform)
              : transform(node.props.children),
          },
        }
      }

      if (Array.isArray(node)) {
        return node.map(transform)
      }

      return node
    }

    return transform(res)
  }

}
