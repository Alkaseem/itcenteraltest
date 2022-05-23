import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss';

interface Props {
    title: string;
    count: string;
}

const Performance = (props: Props) => {
    const style = useStyles();
    const { title, count } = props
    return (
        <div className={style.container}>
            <div style={{ opacity: 0.6, fontWeight: 500, fontSize: 14 }} className={style.text}>{title}</div>
            <div className={style.text}>{count}</div>
        </div>
    )
}


const useStyles = createUseStyles({
    container: {
        height: 100,
        width: 233.33,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '.5rem',
        background: 'linear-gradient(102.36deg, #E19133 20.42%, rgba(225, 51, 51, 0.37) 99.88%)',
        paddingLeft: '1rem'
    },
    text: {
        fontSize: 16,
        fontWeight: 700,
        lineHeight: '19px',
        color: '#FFFFFF',
        textTransform: 'uppercase'
    }
})


Performance.propTypes = {}

export default Performance
