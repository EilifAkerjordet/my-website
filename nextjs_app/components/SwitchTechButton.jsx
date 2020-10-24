import { useState, useEffect } from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  text: {
    color: 'black'
  }
})

const SwitchTechButton = ({ style, setTechComp }) => {
  const [selected, setSelected] = useState('center')
  const classes = useStyles()

  const handleChange = (event, selectedEl) => {
    event.stopPropagation()
    setSelected(selectedEl)
  }

  useEffect(() => {
    setTechComp(selected)
  }, [selected])

  return (
    <Paper>
      <ToggleButtonGroup
        exclusive
        value={selected}
        onChange={handleChange}
        aria-label='view technologies'
        style={style}
      >
        <ToggleButton disabled={selected === 'left'} className={classes.text} value='left' aria-label='General technologies'>
          <Typography>General</Typography>
        </ToggleButton>
        <ToggleButton disabled={selected === 'center'} className={classes.text} value='center' aria-label='Technologies and frameworks'>
          <Typography>Technologies and frameworks</Typography>
        </ToggleButton>
        <ToggleButton disabled={selected === 'right'} className={classes.text} value='right' aria-label='Tools'>
          <Typography>Tools</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
    </Paper>
  )
}

export default SwitchTechButton
