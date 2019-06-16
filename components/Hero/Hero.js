import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import Grid, { Hidden } from 'react-jss-grid'

import Typography from '../Typography'
import Container from '../Container'
import Button from '../Button'

export const styles = theme => ({

  root: {
    position: 'relative',
  },

  rightSide: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: '55.5%',
    height: '99%',
    overflow: 'hidden',
    zIndex: 1,

    '&:before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      opacity: 0.5,
      backgroundImage: theme.palette.gradient,
      zIndex: 1000,
    },

    '& video': {
      position: 'relative',
      objectFit: 'cover',
      width: '100%',
      height: '100%',

      [theme.breakpoints.down('sm')]: {
        minHeight: '100vh',
      },
    },

    [theme.breakpoints.down('md')]: {
      position: 'relative',
      width: '100%',
    },
  },

  hexagon: {
    position: 'relative',
    minHeight: 500,
    zIndex: 2,

    '& img': {
      maxWidth: '100%',
      height: 'auto',
    },
  },

  textRoot: {
    position: 'absolute',
    zIndex: 3,
    top: '50%',
    transform: 'perspective(1px) translateY(-50%)',

    [theme.breakpoints.down('md')]: {
      textAlign: 'center',

      '& p, & h1': {
        color: 'white'
      }
    },
  },
})

export const Hero = ({ classes }) => (
  <Grid
    container
    spacing={0}
    className={classes.root}>
    <Grid
      item
      xs={12}
      className={classes.rightSide}>
      <video
        loop
        autoPlay
        muted
        src={'/static/videos/header.mp4'} />
    </Grid>

    <Hidden
      item
      mdDown
      xs={12}
      component={Grid}
      className={classes.hexagon}>
      <img src={'/static/images/header-bg.svg'} />
    </Hidden>

    <Container
      fullWidth
      className={classes.textRoot}>
      <Container className="container">
        <Grid
          item
          xs={12}
          md={5}
          lg={4}>

          <Typography
            variant={'h1'}
            color={'textDark'}
            gutters>
            Custom solutions made for you
          </Typography>

          <Typography
            variant={'body1'}
            color={'textSecondary'}
            gutterBottom>
            When standard software does not meet your requirements, we can assist you in consulting, building,
            hosting and managing custom solutions. So you can just sit back and relax (or focus on what makes your
            business grow).
          </Typography>

          <Button
            component={'a'}
            href={'mailto:contact@palmtreecoding.com'}
            variant={'filled'}>
            Contact
          </Button>

        </Grid>
      </Container>
    </Container>

  </Grid>
)

Hero.propTypes = {

  /**
   * @ignore
   */
  classes: PropTypes.object.isRequired,

  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,

}

export default withStyles(styles)(Hero)
