import { useTheme } from '@material-ui/core'
import Link from 'next/link'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import ListItemLink from '../ListItemLink'

const DesktopNav = () => {
  const theme = useTheme()

  const linkItemStyle = {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    width: 'auto'
  }
  return (
    <>
      <Link as='/' href='/'>
        <a style={{ textDecoration: 'none', color: 'inherit' }}>
          <IconButton style={{ borderRadius: 0 }} edge='start' aria-label='Home button'>
            eilifakerjordet.io
          </IconButton>
        </a>
      </Link>

      <div className='filler' style={{ flexGrow: 1 }} />

      <ListItemLink style={linkItemStyle} as='/' href='/'>
        <ListItemText primary='hei' />
      </ListItemLink>

      <ListItemLink style={linkItemStyle} as='/about' href='/about'>
        <ListItemText primary='About' />
      </ListItemLink>
    </>

  )
}

export default DesktopNav
