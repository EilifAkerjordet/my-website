import Navbar from './navbar/Navbar'
import Footer from './Footer'

const Layout = ({ children, layoutProps }) => {
  return (
    <>
      <Navbar layoutProps={layoutProps} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
