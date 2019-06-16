import React from 'react'
import PropTypes from 'prop-types'
import Grid from 'react-jss-grid'
import withStyles from 'react-jss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Typography from '../../Typography'

export const styles = theme => ({

  root: {
    marginTop: theme.spacing.unit * 3
  },

  container: {
    position: 'relative',
    display: 'block',
    backgroundColor: theme.palette.background.light,
    boxShadow: [0, 2, 48, 0, 'rgba(0, 0, 0, 0.06)'],
    borderRadius: 5,
    padding: [40, 28],
    overflow: 'hidden',
    marginBottom: theme.spacing.unit * 3,
    marginTop: 0,

    transition: theme.transition.create(['background-image', 'margin-top']),
    willChange: 'background-image, margin-top',

    '&:before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      backgroundImage: theme.palette.gradient,
      opacity: 0,
      zIndex: 1,

      transition: theme.transition.create(['opacity']),
      willChange: 'opacity',
    },

    '&:hover': {
      marginTop: -(theme.spacing.unit * 2),

      '&:before': {
        opacity: 1,
      },

      '& h3, p': {
        color: theme.palette.text.light,
      },
    },

    '& h3, p': {
      position: 'relative',
      zIndex: 3,

      transition: theme.transition.create(['color']),
      willChane: 'color',
    },

    '& h3': {
      marginBottom: theme.spacing.unit * 2,
    },
  },

  icon: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    width: 60,
    height: 67,
    margin: 'auto',
    marginBottom: theme.spacing.unit * 3,
    zIndex: 2,

    '& svg': {
      position: 'absolute',
      display: 'block',
      height: 67,
      zIndex: 3,
      fontSize: 18,
      color: theme.palette.background.dark,
    },
  },

  hexagon: {
    position: 'relative',
    width: 60,
    height: 37,
    marginTop: 15,
    backgroundColor: theme.palette.text.light,
    zIndex: 2,
    boxShadow: '0 2px 48px 0 rgba(0, 0, 0, 0.06)',

    '&:before': {
      content: '""',
      position: 'absolute',
      top: -15,
      left: 0,
      width: 0,
      height: 0,
      borderLeft: [30, 'solid', 'transparent'],
      borderRight: [30, 'solid', 'transparent'],
      borderBottom: [15, 'solid', theme.palette.text.light],
    },

    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: -15,
      left: 0,
      width: 0,
      height: 0,
      borderLeft: [30, 'solid', 'transparent'],
      borderRight: [30, 'solid', 'transparent'],
      borderTop: [15, 'solid', theme.palette.text.light],
    },
  },

})

export const Card = ({ classes, title, description, icon }) => (
  <Grid
    item
    flex
    direction={'column'}
    alignItems={'center'}
    xs={12}
    sm={6}
    md={4}
    lg={3}
    className={classes.root}>

    <div className={classes.container}>
      <div className={classes.icon}>
        <div className={classes.hexagon} />

        <FontAwesomeIcon icon={icon} />
      </div>

      <Typography
        align={'center'}
        variant={'title'}>
        {title}
      </Typography>

      <Typography
        align={'center'}
        variant={'body2'}>
        {description}
      </Typography>
    </div>

  </Grid>
)

Card.propTypes = {

  /**
   * Title of the card
   */
  title: PropTypes.string.isRequired,

  /**
   * Description of the card
   */
  description: PropTypes.string.isRequired,

  /**
   * Icon of the card
   */
  icon: PropTypes.object.isRequired,

  /**
   * @ignore
   */
  classes: PropTypes.object.isRequired,

  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,

}

export default withStyles(styles)(Card)
