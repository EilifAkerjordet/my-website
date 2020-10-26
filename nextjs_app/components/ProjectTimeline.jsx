import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ReactMarkdown from 'react-markdown'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import Icon from '@material-ui/core/Icon'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import GitHubIcon from '@material-ui/icons/GitHub'
import IconButton from '@material-ui/core/IconButton'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import MediaModal from './utils/MediaModal'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px'
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  displayMedia: {
    cursor: 'pointer'
  }
}))

const MediaComp = ({ media, style }) => {
  const [modalOpen, setModalOpen] = useState()

  const classes = useStyles()
  return (
    <>
      {/^image.*$/.test(media.mime)
        ? <img className={classes.displayMedia} onClick={(e) => { e.stopPropagation(); setModalOpen(true) }} src={media.url} style={style} alt={media.alternativeText} />
        : <video className={classes.displayMedia} onClick={(e) => { e.stopPropagation(); setModalOpen(true) }} src={media.url} style={style} alt={media.alternativeText} />}

      <MediaModal media={media} open={modalOpen} setOpen={setModalOpen} />
    </>
  )
}

const ProjectTimeline = ({ projects }) => {
  const classes = useStyles()
  const breakMd = useMediaQuery(theme => theme.breakpoints.down('md'))
  return (
    <Timeline align={`${breakMd ? 'left' : 'alternate'}`}>
      {projects.map((project, index) => {
        const date = /^\w+\s(\w+ )\d+ (\d+)$/.exec(new Date(project.date).toDateString())
        const dateToShow = `${date[1]}${date[2]}`
        return (
          <TimelineItem key={project.id}>
            <TimelineOppositeContent style={breakMd ? { flex: 0 } : { }}>
              <Typography variant='body2' style={{ color: 'white', width: '100%' }}>
                {dateToShow}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color='primary'>
                <Icon>{project.material_ui_icon_name}</Icon>
              </TimelineDot>
              <TimelineConnector className={index === 0 ? classes.secondaryTail : ''} />
            </TimelineSeparator>
            <TimelineContent style={{ maxWidth: '1000px' }}>
              <Paper elevation={3} className={classes.paper}>
                <Typography gutterBottom variant='h6' component='h1'>
                  {project.title}
                  {project.github_link !== '' && (
                    <IconButton onClick={(e) => e.stopPropagation()}>
                      <a target='blank' rel='noopener noreferrer' href={project.github_link}>
                        <GitHubIcon />
                      </a>
                    </IconButton>
                  )}
                </Typography>
                <MediaComp
                  media={project.display_media}
                  style={{
                    width: '30%'
                  }}
                />
                <div style={{ textAlign: 'left' }}>
                  <ReactMarkdown
                    escapeHtml={false}
                    source={project.description}
                  />
                </div>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        )
      })}
    </Timeline>
  )
}

export default ProjectTimeline
