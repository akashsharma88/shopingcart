import { Container } from '@material-ui/core'
import React from 'react'
import { Header } from './Header'

export const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <Container maxWidth="lg" style={{position:'relative',top:64,marginTop:20,marginBottom:20}}>
                {children}
            </Container>
        </div>
    )
}
