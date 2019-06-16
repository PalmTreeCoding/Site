import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import Grid, { Hidden } from 'react-jss-grid'
import clsx from 'clsx'

import Container from '../Container'
import Typography from '../Typography'
import Button from '../Button'

export const styles = theme => ({

  root: {
    position: 'fixed',
    width: '100%',
    height: 80,
    zIndex: 100,

    transition: theme.transition.create(['background-color', 'opacity']),
    willChange: 'background-color, opacity',

    '& $company': {
      opacity: 0.6,
    },

    '& $contact': {
      opacity: 0,
    },

    [theme.breakpoints.down('md')]: {
      '& h3': {
        color: theme.palette.text.light,

        transition: theme.transition.create(['color']),
        willChane: 'color',
      },
    },
  },

  rootScrolled: {
    backgroundColor: theme.palette.background.secondary,
    boxShadow: '0 2px 28px 0 rgba(0, 0, 0, 0.06)',

    '& $company': {
      opacity: 1,

      [theme.breakpoints.down('md')]: {
        '& h3': {
          color: theme.palette.text.primary
        },
      },

      [theme.breakpoints.down('sm')]: {
        '& h3': {
          opacity: 0,
          display: 'none'
        },
      },
    },

    '& $contact': {
      opacity: 1,
    },
  },

  container: {
    height: '100%',
  },

  company: {
    alignItems: 'center',

    '& img': {
      height: 40,
      marginRight: theme.spacing.unit * 2,
    },

    [theme.breakpoints.down('sm')]: {
      // To let the company name go wider then the grid allows on phone
      '& h3': {
        position: 'absolute',
        left: 40 + (theme.spacing.unit * 3), // 40 = width of image + 3 *padding
        width: '100%',
      },
    },
  },

  contact: {
    transition: theme.transition.create(['opacity']),
    willChane: 'opacity',

    '& a': {
      fontSize: [
        14,
        '!important',
      ],
    },
  },
})

export class Header extends React.Component {

  static propTypes = {

    /**
     * @ignore
     */
    classes: PropTypes.object.isRequired,

    /**
     * @ignore
     */
    theme: PropTypes.object.isRequired,

  }

  state = {
    scrolled: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const { scrolled } = this.state
    const doc = document.documentElement
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)

    if (top > 1 && !scrolled) {
      this.setState({
        scrolled: true,
      })

    } else if (top < 1 && scrolled) {
      this.setState({
        scrolled: false,
      })
    }
  }

  render() {
    const { classes } = this.props
    const { scrolled } = this.state

    return (
      <Container
        fullWidth
        component={'header'}
        className={clsx(
          classes.root,
          {
            [classes.rootScrolled]: scrolled,
          },
        )}>

        <Container
          align={'center'}
          className={classes.container}>
          <Grid
            item
            flex
            xs={7}
            sm={9}
            className={classes.company}>
            <img src="/static/images/logo.png" />

            <Typography
              color={'textPrimary'}
              variant={'h3'}>
              Palm Tree Coding
            </Typography>
          </Grid>

          <Grid
            item
            flex
            xs={5}
            sm={3}
            justify={'flex-end'}
            className={classes.contact}>

            <div>
              <Button
                component={'a'}
                href={'mailto:contact@palmtreecoding.com'}>
                Contact
              </Button>
            </div>
          </Grid>
        </Container>

      </Container>
    )
  }

}

export default withStyles(styles)(Header)
