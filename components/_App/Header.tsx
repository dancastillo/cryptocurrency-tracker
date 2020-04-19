import { Menu, Container } from 'semantic-ui-react'
import Link from 'next/link'

function Header() {
    return (
        <Menu color="blue" inverted borderless>
            <Container textAlign="left">
                <Link href="/">
                    <Menu.Item style={{ paddingLeft: 0 }}>
                        <h2>Cryptocurrencies Tracker</h2>
                    </Menu.Item>
                </Link>
            </Container>
        </Menu>
    )
}

export default Header
