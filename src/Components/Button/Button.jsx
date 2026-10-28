
import { Link } from 'react-router'

function Button({link="#",title, icon, styleBtn, ...rest}) {
  return (
    <Link to={link} className={styleBtn} {...rest}>{title}{icon}</Link>
  )
}

export default Button