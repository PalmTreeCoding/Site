import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import Grid from 'react-jss-grid'

import Container from '../Container'
import Typography from '../Typography'
import Client from './Client'

export const styles = theme => ({

  root: {
    //background: '#fff url(/static/section-bg-left.svg) center left no-repeat',

    [theme.breakpoints.down('md')]: {
      marginTop: 0
    }
  },

})

export const Clients = ({ classes }) => (
  <Container
    fullWidth
    gutterTop
    backgroundColor={'secondary'}
    className={classes.root}>

    <Container gutterTop>
      <Grid
        item
        flex
        direction={'column'}
        alignItems={'center'}
        xs={12}>

        <Typography
          color={'textPrimary'}
          variant={'h2'}
          align={'center'}>
          Clients we helped relax
        </Typography>

        <Typography
          gutterBottom
          color={'textSecondary'}
          variant={'body1'}
          align={'center'}>
          Hire an expert, start a partnership or do you have a great idea for a product? We can help!
        </Typography>
      </Grid>
    </Container>

    <Container justify={'center'} gutterBottom>

      <Client
        title={'Jip'}
        description={'Investment'}
        image={'/static/images/jip.png'}
      />

      <Client
        title={'Talpa TV'}
        description={'Hired an expert (Lead Developer)'}
        image={'/static/images/talpa.png'}
      />

      <Client
        title={'Talpa Radio'}
        description={'Hired an expert (Solution Architect)'}
        image={'/static/images/talpa.png'}
      />

    </Container>

  </Container>
)

Clients.propTypes = {

  /**
   * @ignore
   */
  classes: PropTypes.object.isRequired,

  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,

}

export default withStyles(styles)(Clients)
