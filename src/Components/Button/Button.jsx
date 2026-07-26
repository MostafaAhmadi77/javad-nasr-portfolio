
import { Link } from 'react-router'

function Button({link="#",title, icon, style}) {
  return (
    <Link to={link} className={style}>{title}{icon}</Link>
  )
}

export default Button