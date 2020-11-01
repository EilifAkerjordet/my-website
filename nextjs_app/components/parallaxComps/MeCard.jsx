import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  large: {
    width: `calc(${theme.spacing(8)} + 3vw)`,
    height: `calc(${theme.spacing(8)} + 3vw)`,
    marginLeft: '20%'
  }
}))

const MeCard = ({ text, name, displayPic }) => {
  const theme = useTheme()
  const classes = useStyles()
  return (
    <Paper
      elevation={4}
      style={{
        maxWidth: '600px',
        padding: theme.spacing(2),
        margin: theme.spacing(1)
      }}
    >
      <Grid container direction='column' justify='center' alignItems='flex-start' spacing={1}>
        <Grid item xs={12}>
          <Avatar
            alt='eilif akerjordet'
            className={classes.large}
            src={displayPic.formats.thumbnail.url}
            style={{
              marginLeft: '-25px',
              marginTop: '-70px'
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            align='center'
            variant='h6'
            style={{
              width: '100%'
            }}
          >
            {name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>{text} </Typography>
        </Grid>
      </Grid>
    </Paper>

  )
}

export default MeCard
