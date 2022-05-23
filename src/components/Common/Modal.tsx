
import React from 'react';
import { Modal } from 'antd';

interface Props {
    isModalVisible: any,
    handleOk?: any,
    handleCancel?: any,
    width: number | string,
    children: any,
    closable?: boolean
}

export const ModelWindow = (props: Props) => {
    const {
        isModalVisible,
        handleCancel,
        handleOk,
        children,
        width,
        closable
    } = props;

    return (
        <div>
            <Modal
                centered
                footer={null}
                width={width}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                closable={closable}
            >
                {children}
            </Modal>
        </div>
    );
};
