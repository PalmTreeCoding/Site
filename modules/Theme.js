import generateBreakPoints from 'react-jss-grid/utils/breakpoints'
import createTypography from '../utils/createTypography'
import transition from '../utils/transition'

const breakpoints = generateBreakPoints()

export default {

  breakpoints,

  typography: createTypography(breakpoints),

  transition,

  spacing: {
    unit: 8,
  },

  palette: {
    gradient: 'linear-gradient(135deg, #17BCE0 0%, #17E286 100%)',

    primary: {
      main: '#3B566E',
    },

    secondary: {
      main: '',
    },

    text: {
      primary: '#3B566E',
      secondary: '#697BA2',
      dark: '#1E3056',
      light: '#E1F5F4',
    },

    background: {
      primary: '#F7FAFD',
      secondary: '#ffffff',
      dark: '#17C9C3',
      light: '#F9FAFF',
    },
  },

}
