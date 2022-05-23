import React from 'react'
import PropTypes from 'prop-types'
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { CgTwitter } from 'react-icons/cg';
import { createUseStyles } from 'react-jss';

import Performance from '../../components/Cards/Performance';
import Statistics from '../../components/Cards/Statistics';

const MiddleSide = () => {
    const style = useStyles();
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div>
                    <div className={style.title}>May 2022 Performance</div>
                    <div className={style.performance}>
                        <Performance title='Views' count='7,124,568' />
                        <Performance title='Follows' count='91,344' />
                        <Performance title='Likes' count='654,931' />
                    </div>
                </div>
                <div style={{ marginTop: '4rem' }}>
                    <div className={style.title}>Statistics</div>
                    <div className={style.statistics}>
                        <Statistics title='Weekly Target' percentage={25} bg />
                        <Statistics title='Weekly Target' percentage={25} />
                    </div>
                </div>
                <div style={{ marginTop: '4rem' }}>
                    <div style={{ marginTop: '2rem' }} className={style.title}>Monthly Tasks</div>
                    <div className={style.monthlyTask}>
                        <div className={style.iconWrapper}>
                            <div className={style.icon}><FaFacebookF /></div>
                            <div>
                                <div className={style.title}>Facebook Ads</div>
                                <div className={style.subTitle}>Gain atleast 50 visits through facebook ads</div>
                            </div>
                        </div>
                        <div className={style.iconWrapper}>
                            <div style={{ background: '#5FB3F0' }} className={style.icon}><CgTwitter /></div>
                            <div>
                                <div className={style.title}>Twitter</div>
                                <div className={style.subTitle}>Gain atleast 12,500 views on SET posts</div>
                            </div>
                        </div>
                        <div className={style.iconWrapper}>
                            <div className={style.icon}><FaFacebookF /></div>
                            <div>
                                <div className={style.title}>Facebook Ads</div>
                                <div className={style.subTitle}>Promote the SET even on facebook with 5 posts</div>
                            </div>
                        </div>
                        <div className={style.iconWrapper}>
                            <div className={style.icon}><FaFacebookF /></div>
                            <div>
                                <div className={style.title}>Facebook Ads</div>
                                <div className={style.subTitle}>Post even photos taken by Micheal Scott (Photographer)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const useStyles = createUseStyles({
    container: {
        background: '#D8D8D8',
    },
    title: {
        fontSize: 16,
        fontWeight: 700
    },
    subTitle: {
        fontSize: 13,
        fontWeight: 500
    },
    wrapper: {
        margin: '2rem',
        height: 'calc(100% - 3rem)'
    },
    performance: {
        marginTop: '1rem',
        display: 'flex',
        justifyContent: 'space-between'
    },
    statistics: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '1rem'
    },
    monthlyTask: {
        maxHeight: 740,
        background: '#FFFFFF',
        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '5px',
        padding: '1rem',
        display: 'grid',
        gap: '1rem',
        marginTop: '1rem'
    },
    iconWrapper: {
        display: 'flex',
        alignItems: 'center',
        gap: '.8rem'
    },
    icon: {
        background: '#2F63E8',
        color: '#FFFFFF',
        padding: '.6rem .8rem',
        borderRadius: 5,
        fontSize: '1.5rem'
    }
})

MiddleSide.propTypes = {}

export default MiddleSide
