import { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { useTheme } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import GitHubIcon from '@material-ui/icons/GitHub'
import IconButton from '@material-ui/core/IconButton'

import MediaModal from './utils/MediaModal'

const CheckoutDotfiles = ({ image }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const theme = useTheme()
  return (
    <>
      <Paper
        elevation={4}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center'
        }}
      >
        <Typography style={{ display: 'flex', alignItems: 'center' }}>Check also out my dotfiles:
          <IconButton style={{ marginLeft: theme.spacing(1) }} onClick={(e) => e.stopPropagation()}>
            <a href='https://github.com/EilifAkerjordet/dotfiles' target='blank' rel='noopener noreferrer'>
              <GitHubIcon />
            </a>
          </IconButton>
        </Typography>
        <MoreHorizIcon />
        <img
          src={image.url}
          onClick={(e) => { e.stopPropagation(); setModalOpen(true) }}
          alt={image.alternativeText}
          style={{
            cursor: 'pointer',
            width: '100%',
            maxWidth: '800px'
          }}
        />
      </Paper>
      <MediaModal media={image} open={modalOpen} setOpen={setModalOpen} />
    </>
  )
}

export default CheckoutDotfiles
