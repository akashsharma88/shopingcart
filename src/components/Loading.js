import { CircularProgress } from '@material-ui/core'
import React from 'react'

export const Loading = () => {
    return (
        <div style={{ display: 'flex', width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress />
        </div>
    )
}
