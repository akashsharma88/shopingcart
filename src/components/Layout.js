import { Container } from '@material-ui/core'
import React from 'react'
import { Header } from './Header'

export const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <Container maxWidth="lg">
                {children}
            </Container>
        </div>
    )
}
