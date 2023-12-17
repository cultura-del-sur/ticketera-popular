import { COLORS } from 'shared/config'
import { Column, Container, Row } from 'shared/grid/components'
import Logo from 'shared/components/Logo'
import SearchIcon from 'shared/icons/SearchIcon'
import MenuIcon from 'shared/icons/MenuIcon'

import c from './Header.module.scss'


const Header = () => {
  return (
    <Container className={c.main}>
      <Row justifyContent='space-between'>
        <Column className={c.logoZone}><Logo /></Column>
        <Column className={c.menuZone}>
          <Row spacing={10}>
            <Column><SearchIcon color={COLORS.secondary_0} /></Column>
            <Column><MenuIcon color={COLORS.secondary_0} /></Column>
          </Row>
        </Column>
      </Row>
    </Container>
  )
}

export default Header
