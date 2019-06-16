import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import withStyles from 'react-jss'
import Grid from 'react-jss-grid'

import { capitalize } from '../../utils/helpers'

export const styles = theme => ({

  root: {
    flex: '1 1 100%',
    maxWidth: '100%',
    margin: '0 auto',

    [theme.breakpoints.down('md')]: {
      padding: [
        0,
        theme.spacing.unit * 2,
      ],
    },

    [theme.breakpoints.down('sm')]: {
      padding: [
        0,
        theme.spacing.unit,
      ],
    },

    [theme.breakpoints.up('xs')]: {
      maxWidth: 540,
    },

    [theme.breakpoints.up('sm')]: {
      maxWidth: 720,
    },

    [theme.breakpoints.up('md')]: {
      maxWidth: 960,
    },

    [theme.breakpoints.up('lg')]: {
      maxWidth: 1140,
    },
  },

  noSpacing: {
    padding: 0,
  },

  fullWidth: {
    width: '100%',
    maxWidth: '100%',

    [theme.breakpoints.down('md')]: {
      padding: 0,
    },
  },

  backgroundColorPrimary: {
    backgroundColor: theme.palette.background.primary,
  },

  backgroundColorSecondary: {
    backgroundColor: theme.palette.background.secondary,
  },

  alignCenter: {
    alignItems: 'center',
  },

  justifyCenter: {
    justifyContent: 'center',
  },

  gutterTop: {
    marginTop: theme.spacing.unit * 10,
  },

  gutterBottom: {
    marginBottom: theme.spacing.unit * 10,
  },

})

export const Container = (props) => {
  const {
    children,
    classes,
    fullWidth,
    backgroundColor,
    spacing,
    align,
    justify,
    gutters,
    gutterTop,
    gutterBottom,
    className: classNameProp,
    ...rest
  } = props

  const className = clsx(
    classes.root,
    {
      [classes.fullWidth]: fullWidth,
      [classes.noSpacing]: spacing === 0,
      [classes.gutterTop]: gutters || gutterTop,
      [classes.gutterBottom]: gutters || gutterBottom,

      [classes[`align${capitalize(align)}`]]: !!align,
      [classes[`justify${capitalize(justify)}`]]: !!justify,

      [classes[`backgroundColor${capitalize(backgroundColor)}`]]: backgroundColor !== 'default',
    },
    classNameProp,
  )

  return (
    <Grid
      className={className}
      spacing={spacing}
      {...rest}
      container>
      {children}
    </Grid>
  )
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),

  classes: PropTypes.object.isRequired,

  className: PropTypes.string,

  fullWidth: PropTypes.bool,

  backgroundColor: PropTypes.string,

  spacing: PropTypes.number,
}

Container.defaultProps = {
  className: null,
  fullWidth: false,
  align: '',
  justify: '',
  backgroundColor: 'default',
  gutters: false,
  gutterTop: false,
  gutterBottom: false,
}

export default withStyles(styles)(Container)
