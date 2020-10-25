import Icon from '@material-ui/core/Icon'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { useTheme } from '@material-ui/core'

const MyValues = ({ values }) => {
  const theme = useTheme()

  return (
    <Grid container spacing={2} style={{ justifyContent: 'space-around' }}>
      {values.map(value => (
        <Grid key={value.id} item xs={12} sm={6} md={3} style={{ padding: theme.spacing(2) }}>
          <Paper style={{ textAlign: 'center', padding: theme.spacing(1) }}>
            <Icon style={{ fontSize: theme.spacing(10) }}>{value.material_ui_icon_name}</Icon>
            <Typography gutterBottom variant='h5'>{value.value_title}</Typography>
            <Typography>{value.value_text}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}

export default MyValues
