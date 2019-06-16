import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import Grid from 'react-jss-grid'

import Container from '../Container'
import Typography from '../Typography'

export const styles = theme => ({

  root: {
    position: 'relative',
    height: 75,
    backgroundImage: theme.palette.gradient,
  },

})

export const Footer = ({ classes }) => (
  <Container
    fullWidth
    component={'footer'}
    className={classes.root}>

    <Grid
      item
      flex
      xs={12}
      justify={'center'}
      alignItems={'center'}>
      <Typography
        color={'textLight'}
        variant={'caption'}
        align={'center'}>
        {new Date().getFullYear()} &copy; Palm Tree Coding B.V. - KVK 69502757
      </Typography>
    </Grid>

  </Container>
)

Footer.propTypes = {

  /**
   * @ignore
   */
  classes: PropTypes.object.isRequired,

  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,

}

export default withStyles(styles)(Footer)
