import { Spring } from 'react-spring'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

const MediaModal = ({ media, open, setOpen }) => {
  const classes = useStyles()
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
    >
      {props => (
        <Modal
          style={props}
          aria-labelledby='spring-modal-title'
          aria-describedby='spring-modal-description'
          className={classes.modal}
          open={open}
          onClose={(e) => { e.stopPropagation(); setOpen(false) }}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          {/^image.*$/.test(media.mime)
            ? <img src={media.url} style={{ maxHeight: '70vh', maxWidth: '90vw' }} alt={media.alternativeText} />
            : <video src={media.url} style={{ maxHeight: '70vh', maxWidth: '90vw' }} alt={media.alternativeText} />}
        </Modal>
      )}
    </Spring>

  )
}

export default MediaModal
