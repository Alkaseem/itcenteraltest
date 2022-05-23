import React from 'react'
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

import Percentage from '../../assets/icons/Percentage.svg'
import Percentage1 from '../../assets/icons/Percentage1.svg'

interface Props {
    title: string;
    percentage: number;
    bg?: boolean,
}

const Statistics = (props: Props) => {
    const style = useStyles();
    const { title, percentage, bg } = props;

    const percentageStyle: any = {
        fontSize: 12,
        color: !bg ? '#FFFFFF' : '#E19133'
    }
    return (
        <div className={classNames(style.container, bg && style.withWihteBg)}>
            <div style={{ display: 'grid', gap: '.3rem' }}>
                <div className={style.text}>{title}</div>
                <div style={percentageStyle} className={style.text}>{percentage}% achieved</div>
            </div>
            <div className={style.percentage}>
                {bg ? <img src={Percentage1} alt='perc' /> : <img src={Percentage} alt='perc' />}
            </div>
        </div>
    )
}

const useStyles = createUseStyles({
    container: {
        height: 100,
        width: 350,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#E19133',
        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
        padding: '0 1rem'
    },
    withWihteBg: {
        background: '#FFFFFF',
    },
    text: {
        fontSize: 14,
        fontWeight: 700,
        lineHeight: '19px',
        textTransform: 'capitalize',
    },
    percentage: {
        borderLeft: '1px solid #000000',
        paddingLeft: '2rem',

    },
})

Statistics.propTypes = {}

export default Statistics
