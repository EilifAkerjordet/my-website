import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'

const coreTheme = {
  typography: {
    h1: {
      fontSize: 80
    }
  }
}

export const lightTheme = responsiveFontSizes(
  createMuiTheme({
    ...coreTheme,
    palette: {
      type: 'light',
      primary: {
        main: '#C21E56'
      },
      secondary: {
        main: '#d00060'
      }
    }
  })
)

export const darkTheme = responsiveFontSizes(
  createMuiTheme({
    ...coreTheme,
    palette: {
      type: 'dark',
      primary: {
        main: '#b22e5b'
      },
      secondary: {
        main: '#bb1562'
      }
    }
  })
)
