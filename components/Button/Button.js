import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import withStyles from 'react-jss'

export const styles = theme => ({

  root: {
    margin: 0,

    minWidth: 98,
    minHeight: 30,
    padding: [theme.spacing.unit, theme.spacing.unit * 4],
    borderRadius: 100,
    border: 'none',
    cursor: 'pointer',
    outline: 'none',

    color: theme.palette.text.primary,
    textDecoration: 'none',

    transition: theme.transition.create(['background-color', 'border-color', 'color']),
    willChange: 'background-color, border-color, color',

    ...theme.typography.button,

  },

  flat: {
    fontWeight: 500,
    border: [1, 'solid'],
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    backgroundColor: 'transparent',

    '&:hover': {
      backgroundColor: theme.palette.background.dark,
      borderColor: theme.palette.background.dark,
      color: 'white',
    },
  },

  filled: {
    color: 'white',
    backgroundColor: theme.palette.background.dark,

    '&:hover': {
      backgroundColor: '#17c0ba',
    },
  },

})

export const Button = (props) => {
  const {
    component,
    variant = 'flat',
    classes,
    className,
    theme,
    ...other
  } = props

  const Component = component || 'button'

  return (
    <Component
      className={clsx(
        classes.root,
        {
          [classes[variant]]: variant,
        },
        className,
      )}
      {...other}
    />
  )
}

Button.propTypes = {

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
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.elementType,

  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,

  /**
   * Applies the theme typography styles.
   */
  variant: PropTypes.oneOf([
    'flat',
    'filled',
  ]),

}

export default withStyles(styles)(Button)
