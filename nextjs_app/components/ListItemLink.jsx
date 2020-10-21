import Link from 'next/link'
import { useState, useEffect, forwardRef } from 'react'
import ListItem from '@material-ui/core/ListItem'

const LinkComp = forwardRef((props, ref) => {
  const [aProps, setAProps] = useState({})
  useEffect(() => {
    const prps = { ...props }
    delete prps.href
    delete prps.as
    setAProps(prps)
  }, [])
  return (
    <Link as={props.as} href={props.href}>
      <a {...aProps} ref={ref}>{props.children}</a>
    </Link>
  )
})

const ListItemLink = props => (
  <ListItem button component={LinkComp} {...props} />
)

export default ListItemLink
