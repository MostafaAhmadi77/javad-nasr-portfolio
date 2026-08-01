
import { Link } from 'react-router'

function Button({link="#",title, icon, styleBtn}) {
  return (
    <Link to={link} className={styleBtn}>{title}{icon}</Link>
  )
}

export default Button