import React from 'react'
import PropTypes from 'prop-types'
import Grid from 'react-jss-grid'

import Typography from '../../Typography'

export const Client = ({ title, description, image }) => (
  <Grid
    item
    flex
    direction={'column'}
    alignItems={'center'}
    xs={12}
    sm={6}
    md={3}>

    <img
      alt={`Client ${title}`}
      width={100}
      src={image} />

    <Typography
      color={'textPrimary'}
      variant={'h3'}
      align={'center'}>
      {title}
    </Typography>

    <Typography
      gutterBottom
      color={'textSecondary'}
      variant={'body2'}
      align={'center'}>
      {description}
    </Typography>
  </Grid>
)

Client.propTypes = {

  /**
   * Title of the client
   */
  title: PropTypes.string.isRequired,

  /**
   * Description of the client
   */
  description: PropTypes.string.isRequired,

  /**
   * Image url of the client
   */
  image: PropTypes.string.isRequired,

}

export default Client
