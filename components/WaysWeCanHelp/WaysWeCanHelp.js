import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import Grid from 'react-jss-grid'

import { faHammer, faCoffee, faFileContract } from '@fortawesome/free-solid-svg-icons'

import Container from '../Container'
import Typography from '../Typography'
import Card from './Card'

export const styles = theme => ({

  root: {
    //background: '#fff url(/static/section-bg-left.svg) center left no-repeat',

    [theme.breakpoints.down('md')]: {
     // marginTop: 0,
    },
  },

})

export const WaysWeCanHelp = ({ classes }) => (
  <Container
    fullWidth
    gutterTop
    className={classes.root}>

    <Container gutterTop>
      <Grid
        item
        flex
        direction={'column'}
        alignItems={'center'}
        xs={12}>

        <Typography
          gutterBottom
          color={'textPrimary'}
          variant={'h2'}
          align={'center'}>
          Ways we can help your business
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

      <Card
        title={'Tailor made software'}
        description={'Just want to relax? We can build, host and manage for you! If not, we know who can.'}
        icon={faHammer}
      />

      <Card
        title={'Hire a expert'}
        description={'Hire us to work directly within your team, building and educating on the go.'}
        icon={faFileContract}
      />

      <Card
        title={'Investment'}
        description={'Have a great idea? Let\'s sit together and see how we can help.'}
        icon={faCoffee}
      />

    </Container>

  </Container>
)

WaysWeCanHelp.propTypes = {

  /**
   * @ignore
   */
  classes: PropTypes.object.isRequired,

  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,

}

export default withStyles(styles)(WaysWeCanHelp)
