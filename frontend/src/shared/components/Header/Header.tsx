import MenuIcon from 'shared/components/Header/MenuIcon'
import Logo from 'shared/components/Logo'
import { Column, Container, Row } from 'shared/grid/components'
import c from './Header.module.scss'
import { COLORS } from 'shared/config'
import SearchIcon from 'shared/components/Header/SearchIcon'

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
