import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Hidden from '@material-ui/core/Hidden'

import useScrolled from '../../hooks/useScrolled'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const Navbar = ({ layoutProps }) => {
  const isNavScrolled = useScrolled()

  return (
    <AppBar
      id='the-navbar'
      position='fixed'
      color='inherit'
      style={{
        zIndex: 1,
        transition: 'background-color 0.2s ease',
        backgroundColor: `${isNavScrolled ? '' : 'transparent'}`,
        boxShadow: `${!isNavScrolled ? 'none' : ''}`,
        color: `${!isNavScrolled ? 'white' : ''}`
      }}
    >
      <Hidden implementation='css' smDown>
        <Toolbar component='nav'>
          <DesktopNav layoutProps={layoutProps} />
        </Toolbar>
      </Hidden>

      <Hidden implementation='css' mdUp>
        <Toolbar style={{ display: 'flex', jsutifyContent: 'space-between' }} component='nav'>
          <MobileNav layoutProps={layoutProps} />
        </Toolbar>
      </Hidden>
    </AppBar>
  )
}

export default Navbar
