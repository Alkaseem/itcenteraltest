import React from 'react'
import { createUseStyles } from 'react-jss';
import { Typography } from 'antd';

const { Text } = Typography;

interface Props {
    handleCancel?: any
    handleConfirm?: any
}

export const Confirm = (props: Props) => {
    const { handleConfirm, handleCancel, } = props;
    const style = useStyles();

    return (
        <div className={style.container}>
            <Text className={style.title}>Don’t forget to save your changes.</Text>
            <Text className={style.subTitle}>If you leave this page without saving, you’ll lose the changes you made to your expenses.</Text>
            <div className={style.buttonsContainer}>
                {/* <Button
                    text='Leave page'
                    width='270px'
                    height='45px'
                    weight='900'
                    grayOutlinebutton
                    handleClick={handleLeave}
                />
                <Button
                    text='Save changes'
                    width='270px'
                    height='45px'
                    weight='900'
                    outline
                    handleClick={handleSave}
                /> */}
            </div>
        </div>
    )
}

const useStyles = createUseStyles({
    container: {
        padding: '4rem 0',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    title: {
        color: '#0A0A0A',
        fontWeight: '500',
        fontSize: 28,
        letterSpacing: '-0.7px',
        lineHeight: '35px',
        textAlign: 'center',
    },
    subTitle: {
        marginTop: '2rem',
        color: '#0A0A0A',
        fontWeight: '400',
        fontSize: 18,
        letterSpacing: '-0.9px',
        lineHeight: '24px',
        textAlign: 'center',
        maxWidth: '30rem'
    },
    buttonsContainer: {
        marginTop: '3rem',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '75%',
    },
})
