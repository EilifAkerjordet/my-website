import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import DesktopNav from './DesktopNav'

const Navbar = () => {
  return (
    <AppBar
      id='the-navbar'
      position='fixed'
      color='inherit'
    >
      <Toolbar component='nav'>
        <DesktopNav />
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
