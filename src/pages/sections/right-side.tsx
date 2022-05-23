import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

import Profile from '../../components/Common/Profile';
import Picture from '../../assets/images/Profile.png'
import Logout from '../../assets/icons/Logout.svg'
import { ModelWindow } from '../../components/Common/Modal';
import { Confirm } from '../../components/Common/Confirm';

const RightSide = () => {
    const style = useStyles()
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div className={style.container}>
            <ModelWindow
                isModalVisible={isModalVisible}
                handleOk={handleOk}
                handleCancel={handleCancel}
                width={800}
            >
                <Confirm />
            </ModelWindow>
            <div className={style.wrapper}>
                <div className={style.profile}>
                    <Profile
                        role='Marketing Manager'
                        picture={Picture}
                        name='John'
                        followers='736k'
                        following='736k'
                        posts='432'
                    />
                </div>
                <div onClick={showModal} className={style.footer}>
                    <img src={Logout} alt='logout' />
                    <div>Log out of account</div>
                </div>
            </div>
        </div>
    )
}

const useStyles = createUseStyles({
    container: {
        background: '#FFFFFF',
    },
    wrapper: {
        height: 'calc(100% - 3rem)',
        margin: '2rem',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '1fr max-content'
    },
    profile: {},
    footer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1.5rem',
        fontSize: 12,
        fontWeight: 700,
        color: '#E13333',
        cursor: 'pointer'
    },
})

RightSide.propTypes = {}

export default RightSide
