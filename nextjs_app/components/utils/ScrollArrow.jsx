import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import Typography from '@material-ui/core/Typography'

const ScrollArrow = ({ style, text, scrollRef, n, last, absolute }) => {
  const handleScroll = () => {
    scrollRef.current.scrollTo(n)
  }
  return (
    <div
      onClick={handleScroll}
      style={{
        ...style,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        color: 'white',
        position: `${absolute ? '' : 'absolute'}`,
        marginTop: `${last ? '50px' : ''}`,
        textAlign: 'center',
        bottom: 20
      }}
    >
      <Typography variant='h4'>{text}</Typography>
      <KeyboardArrowDownIcon style={{ transform: `${last ? 'rotate(180deg)' : ''}`, fontSize: 40 }} />
    </div>
  )
}

export default ScrollArrow
