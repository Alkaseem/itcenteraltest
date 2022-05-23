import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

import Bell from '../../assets/icons/bell.svg'


interface Props {
    name: string
    role: string;
    picture: any;
    followers: string;
    following: string;
    posts: string;
}

const Profile = (props: Props) => {
    const style = useStyles();
    const { name, role, followers, following, picture, posts } = props;
    return (
        <div className={style.container}>
            <div className={style.header}>
                <div >
                    <div className={style.title}>Hi {name}</div>
                    <div style={{ fontWeight: 500, marginTop: 3 }} className={style.title}>Good morning!</div>
                </div>
                <div className={style.bell}><img src={Bell} alt='Bell' /></div>
            </div>
            <div className={style.picture}>
                <img src={picture} alt='profile' />
            </div>
            <div className={style.role}>
                <span>{role} @orangewhale</span>
            </div>
            <div className={style.performance}>
                <div className={style.performanceWrapper}>
                    <div className={style.title}>{followers}</div>
                    <div style={{ fontSize: 10 }}>Followers</div>
                </div>
                <div className={style.performanceWrapper}>
                    <div className={style.title}>{following}</div>
                    <div style={{ fontSize: 10 }}>Following</div>
                </div>
                <div className={style.performanceWrapper}>
                    <div className={style.title}>{posts}</div>
                    <div style={{ fontSize: 10 }}>Post</div>
                </div>
            </div>
        </div>
    )
}

const useStyles = createUseStyles({
    container: {},
    header: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 12,
        fontWeight: 700
    },
    bell: {
        background: ' #FFFFFF',
        border: '0.1px solid #000000',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '5px',
        alignSelf: 'center',
        padding: '1px 2px'
    },
    picture: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '3rem'
    },
    role: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: 12,
        marginTop: '2rem'
    },
    performance: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '3rem'
    },
    performanceWrapper: {
        textAlign: 'center'
    }

})

Profile.propTypes = {}

export default Profile
