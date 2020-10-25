import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { useTheme } from '@material-ui/core'
import { Spring } from 'react-spring'

const LogoPaper = ({ logo }) => {
  const theme = useTheme()
  return (
    <img src={logo.url} alt={logo.alternativeText} style={{ width: '100%', maxWidth: theme.spacing(13) }} />
  )
}

const TechnologiesAndFrameWorks = ({ logosOne, logosTwo, textOne, textTwo }) => {
  const theme = useTheme()
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
    >
      {props => (
        <Paper
          elevation={4} style={{
            ...props,
            width: '700px',
            minWidth: '310px',
            padding: theme.spacing(2)
          }}
        >
          <Grid container wrap='wrap' spacing={2} justify='space-around' alignItems='center'>
            <Grid item xs={12}>
              <Typography gutterBottom align='center'>{textOne}</Typography>
              <Divider />
            </Grid>
            {logosOne.map(logo => (
              <Grid key={logo.id} item xs={3}>
                <LogoPaper logo={logo} />
              </Grid>
            ))}
            {logosTwo && (
              <>
                <Grid item xs={12}>
                  <Typography gutterBottom align='center'>{textTwo}</Typography>
                  <Divider />
                </Grid>
                {logosTwo.map(logo => (
                  <Grid key={logo.id} item xs={3}>
                    <LogoPaper logo={logo} />
                  </Grid>
                ))}
              </>
            )}
          </Grid>
        </Paper>
      )}
    </Spring>
  )
}

export default TechnologiesAndFrameWorks
