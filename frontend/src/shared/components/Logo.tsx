import { unbounded } from 'shared/fonts'
import c from './Logo.module.scss'

const Logo = () => {
  return <div className={`${c.main} ${unbounded.className}`}><a>Ticketera<b>Popular</b></a></div>
}

export default Logo
