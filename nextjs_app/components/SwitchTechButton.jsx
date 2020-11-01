import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  text: {
    color: 'black',
    height: '50px'
  },
  font: {
    fontSize: theme.breakpoints.down('md') ? 14 : 'inherit'
  }
}))

const SwitchTechButton = ({ setTechComp, techComp, style }) => {
  const classes = useStyles()

  const handleChange = (event, selectedEl) => {
    event.stopPropagation()
    setTechComp(selectedEl)
  }

  return (
    <Paper style={{ ...style }}>
      <ToggleButtonGroup
        exclusive
        value={techComp}
        onChange={handleChange}
        aria-label='view technologies'
      >
        <ToggleButton className={classes.text} value='left' aria-label='General technologies'>
          <Typography className={classes.font}>General</Typography>
        </ToggleButton>
        <ToggleButton className={classes.text} value='center' aria-label='Technologies and frameworks'>
          <Typography className={classes.font}>Technologies and frameworks</Typography>
        </ToggleButton>
        <ToggleButton className={classes.text} value='right' aria-label='Tools'>
          <Typography className={classes.font}>Tools</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
    </Paper>
  )
}

export default SwitchTechButton
