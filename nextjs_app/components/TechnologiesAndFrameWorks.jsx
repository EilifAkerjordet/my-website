import Paper from '@material-ui/core/Paper'
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
            padding: theme.spacing(2),
            marginTop: '75px'
          }}
        >
          <Typography gutterBottom align='center'>{textOne}</Typography>
          <Divider />
          {logosOne.map(logo => (
            <LogoPaper key={logo.id} logo={logo} />
          ))}
          {logosTwo && (
            <>
              <Typography gutterBottom align='center'>{textTwo}</Typography>
              <Divider />
              {logosTwo.map(logo => (
                <LogoPaper logo={logo} />
              ))}
            </>
          )}
        </Paper>
      )}
    </Spring>
  )
}

export default TechnologiesAndFrameWorks
