import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import withStyles from 'react-jss'

import { capitalize } from '../../utils/helpers'

export const styles = theme => ({

  root: {
    margin: 0,
    textAlign: 'inherit',
  },

  body2: theme.typography.body2,

  body1: theme.typography.body1,

  caption: theme.typography.caption,

  button: theme.typography.button,

  h1: theme.typography.h1,

  h2: theme.typography.h2,

  h3: theme.typography.h3,

  title: theme.typography.title,

  paragraph: {
    marginBottom: 16,
  },

  alignCenter: {
    textAlign: 'center',
  },

  colorInherit: {
    color: 'inherit',
  },

  colorPrimary: {
    color: theme.palette.primary.main,
  },

  colorSecondary: {
    color: theme.palette.secondary.main,
  },

  colorTextPrimary: {
    color: theme.palette.text.primary,
  },

  colorTextSecondary: {
    color: theme.palette.text.secondary,
  },

  colorTextDark: {
    color: theme.palette.text.dark,
  },

  colorTextLight: {
    color: theme.palette.text.light,
  },

  gutterBottom: {
    marginBottom: theme.spacing.unit * 3,
  },

  gutterTop: {
    marginTop: theme.spacing.unit * 3,
  },

})

const defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  title: 'h3',
  body1: 'p',
  body2: 'p',
}

const Typography = React.forwardRef(function Typography(props, ref) {
  const {
    align = 'inherit',
    classes,
    className,
    color = 'textPrimary',
    component,
    display = 'initial',
    gutters = false,
    gutterTop = false,
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    theme,
    variant = 'body1',
    variantMapping = defaultVariantMapping,
    ...other
  } = props

  const Component =
    component ||
    (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) ||
    'span'

  return (
    <Component
      className={clsx(
        classes.root,
        {
          [classes[variant]]: variant !== 'inherit',
          [classes.gutterBottom]: gutters || gutterBottom,
          [classes.gutterTop]: gutters || gutterTop,
          [classes.paragraph]: paragraph,
          [classes[`align${capitalize(align)}`]]: align !== 'inherit',
          [classes[`color${capitalize(color)}`]]: color !== 'initial',
          [classes[`display${capitalize(display)}`]]: display !== 'initial',
        },
        className,
      )}
      ref={ref}
      {...other}
    />
  )
})

Typography.propTypes = {

  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * @ignore
   */
  classes: PropTypes.object.isRequired,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf([
    'initial',
    'inherit',
    'primary',
    'secondary',
    'textPrimary',
    'textSecondary',
    'textDark',
    'textLight',
  ]),

  /**
   * The alignment of the text.
   */
  align: PropTypes.oneOf([
    'inherit',
    'center',
  ]),

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * By default, it maps the variant to a good default headline component.
   */
  component: PropTypes.elementType,

  /**
   * If `true`, the text will have a bottom margin.
   */
  paragraph: PropTypes.bool,

  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,

  /**
   * Applies the theme typography styles.
   */
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'title',
    'body1',
    'body2',
    'caption',
    'button',
  ]),

  /**
   * We are empirically mapping the variant property to a range of different DOM element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` property.
   */
  variantMapping: PropTypes.object,
}

export default withStyles(styles)(Typography)
