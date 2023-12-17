import MenuIcon from 'shared/components/Header/MenuIcon'
import Logo from 'shared/components/Logo'
import { Column, Container, Row } from 'shared/grid/components'
import c from './Header.module.scss'

const Header = () => {
  return (
    <Container className={c.main}>
      <Row justifyContent='space-between'>
        <Column className={c.logoZone}><Logo /></Column>
        <Column className={c.menuZone}>
          <Row spacing={10}>
            <Column>M</Column>
            <Column><MenuIcon /></Column>
          </Row>
        </Column>
      </Row>
    </Container>
  )
}

export default Header
