import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

import Box from '../../assets/icons/Box.svg'
import Home from '../../assets/icons/Home.svg'
import Calender from '../../assets/icons/Calender.svg'
import Settings from '../../assets/icons/Settings.svg'
import Add from '../../assets/icons/Add.svg'
import Publisher from '../../assets/icons/Publisher.svg'
import Book from '../../assets/icons/Book.svg'
import Schedule from '../../assets/icons/Schedule.svg'

const LeftSide = () => {
    const style = useStyles();
    return (
        <div className={style.container}>
            <div className={style.box}>
                <img src={Box} alt='Box' />
                <div>
                    <div style={{ marginBottom: '.3rem' }} className={classNames(style.text, style.activeText)}>OrangeWhale</div>
                    <div className={style.text}>Growth & Marketing</div>
                </div>
            </div>
            <div style={{ marginTop: '3rem' }} className={style.menus}>
                <div className={classNames(style.menuItem, style.activeText)}>
                    <img src={Home} alt='Box' /> <span>Dahsboard</span>
                </div>
                <div className={style.menuItem}>
                    <img src={Calender} alt='Box' /> <span>Activity</span>
                </div>
                <div className={style.menuItem}>
                    <img src={Settings} alt='Box' /> <span>Settings</span>
                </div>
                <div className={style.line}></div>
            </div>

            <div className={style.top}>
                <span className={classNames(style.text, style.activeText)}>Posts</span>
                <img src={Add} alt='Box' />
            </div>

            <div style={{ marginTop: '2rem' }} className={style.menus}>
                <div className={style.menuItem}>
                    <img src={Publisher} alt='Box' /> <span>Published</span>
                </div>
                <div className={style.menuItem}>
                    <img style={{ background: 'gray', marginLeft: '.2rem', borderRadius: '3px' }} src={Schedule} alt='Box' /> <span>Today’s Scheduled</span>
                </div>
                <div className={style.menuItem}>
                    <img src={Book} alt='Box' /> <span>Draft</span>
                </div>
                <div className={style.line}></div>
            </div>
        </div>
    )
}

const useStyles = createUseStyles({
    container: {
        margin: '2rem',
        background: '#FFFFFF',
    },
    box: {
        display: 'flex',
        alignItems: 'center',
        gap: '.8rem'
    },
    text: {
        fontSize: 12,
        lineHeight: '17px'
    },
    activeText: {
        fontWeight: 700
    },
    menus: {
        display: 'grid',
        gap: '2rem',
        fontSize: 12,
        lineHeight: '17px',
        fontWeight: 400,
        marginLeft: '1rem'
    },
    menuItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem'
    },
    top: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '15rem',
        marginTop: '2rem'
    },
    line: {
        width: '100%',
        textAlign: 'center',
        borderBottom: '1px solid rgba(0, 0, 0, 0.5)',
        lineHeight: '0.1em',
        maxWidth: '13rem',
        margin: '0 auto'
    }
})
LeftSide.propTypes = {}

export default LeftSide
