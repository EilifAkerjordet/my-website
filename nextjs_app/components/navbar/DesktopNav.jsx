import Link from 'next/link'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const DesktopNav = () => {
  return (
    <>
      <Link as='/' href='/'>
        <a style={{ textDecoration: 'none', color: 'inherit' }}>
          <IconButton style={{ borderRadius: 0 }} edge='start' aria-label='Home button'>
            <Typography>eilifakerjordet.io</Typography>
          </IconButton>
        </a>
      </Link>

      <div className='filler' style={{ flexGrow: 1 }} />

      <a href='https://github.com/EilifAkerjordet' target='_blank' rel='noopener noreferrer'style={{ textDecoration: 'none', color: 'inherit' }}>
        <IconButton edge='start' aria-label='Home button'>
          <GitHubIcon />
        </IconButton>
      </a>

      <a href='https://www.linkedin.com/in/eilif-akerjordet/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
        <IconButton edge='start' aria-label='Home button'>
          <LinkedInIcon />
        </IconButton>
      </a>
    </>

  )
}

export default DesktopNav
