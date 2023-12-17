import { Column, Container, Row } from 'shared/grid/components'
import c from './Header.module.scss'
import Logo from 'shared/components/Logo'

const Header = () => {
  return (
    <Container className={c.main}>
      <Row justifyContent='space-between'>
        <Column className={c.logoZone}><Logo /></Column>
        <Column className={c.menuZone}>
          <Row spacing={10}>
            <Column>B</Column>
            <Column>M</Column>
          </Row>
        </Column>
      </Row>
    </Container>
  )
}

export default Header
