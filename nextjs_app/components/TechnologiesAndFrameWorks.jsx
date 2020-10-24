import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { useTheme } from '@material-ui/core'
import { Spring } from 'react-spring'

const LogoPaper = ({ logo }) => {
  const theme = useTheme()
  return (
    <Paper style={{ borderRadius: '50%', height: '100%', width: '100%', maxWidth: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src={logo.url} alt={logo.alternativeText} style={{ width: '100%', maxWidth: theme.spacing(15), marginLeft: theme.spacing(1), marginRight: theme.spacing(1) }} />
    </Paper>
  )
}

const TechnologiesAndFrameWorks = ({ logosOne, logosTwo }) => {
  const theme = useTheme()
  return (
    <>
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {props => (
          <Grid container spacing={5} style={{ ...props, justifyContent: 'center' }}>
            <Grid item xs={12} container spacing={2} style={{ justifyContent: 'center' }}>
              {logosOne.map(logo => (
                <Grid key={logo.id} item xs>
                  <LogoPaper logo={logo} />
                </Grid>
              ))}
            </Grid>

            {logosTwo && (
              <Grid item xs={12} container spacing={2}>
                {logosTwo.map(logo => (
                  <Grid key={logo.id} item xs>
                    <LogoPaper logo={logo} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Grid>
        )}
      </Spring>
    </>
  )
}

export default TechnologiesAndFrameWorks
