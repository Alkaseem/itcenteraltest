import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss';

const Layout = ({ children }: any) => {
    const style = useStyles();
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}

const useStyles = createUseStyles({
    container: {
        display: 'grid',
        gridTemplateColumns: '.7fr 2fr .7fr',
        gridTemplateRows: '1fr',
        height: '100vh',
    }
})

Layout.propTypes = {}

export default Layout
