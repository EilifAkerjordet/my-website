import { useTheme } from '@material-ui/core'
import Link from 'next/link'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import ListItemLink from '../ListItemLink'
import Logo from '../../components/icons/Logo'
import ExpandableMenu from './ExpandableMenu'
import DarkModeToggle from './DarkModeToggle'

const DesktopNav = ({ layoutProps }) => {
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
            <Logo
              globalAssets={layoutProps.globalAssets}
              style={{ width: '30px' }}
            />
          </IconButton>
        </a>
      </Link>

      <div className='filler' style={{ flexGrow: 1 }} />

      {layoutProps.contentTypes.map(e => (
        <ListItemLink style={linkItemStyle} key={e.slug + e.name} as={`/${e.slug}`} href='/[category]'>
          <ListItemText primary={e.name} />
        </ListItemLink>
      ))}

      <ExpandableMenu layoutProps={layoutProps} style={linkItemStyle} />

      <ListItemLink style={linkItemStyle} as='/about' href='/about'>
        <ListItemText primary='About' />
      </ListItemLink>

      <DarkModeToggle />
    </>

  )
}

export default DesktopNav
