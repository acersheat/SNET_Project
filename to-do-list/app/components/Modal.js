"use client";
import React, { useReducer, useState } from 'react';
import { FloatButton, Modal, Input, Button } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import Priority from './Radio';



const InputModal = ({ visible, onCancel, onOk, value }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleOk = () => {
        onOk(inputValue);
        setInputValue('');
    };



    return (
        <>
            <Modal title="Enter Text"
                visible={visible}
                onCancel={onCancel}
                footer={[
                    <Button key="cancel" onClick={onCancel}>
                        Cancel
                    </Button>,
                    <Button key="ok" type="primary" onClick={handleOk}>
                        OK
                    </Button>,
                ]}>
                <b>Task:</b><Input
                    type="text"
                    placeholder='Enter your task'
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <br /><br />
                <b>Select priority:</b><Priority/>
                <br />
                <b>Assigned to:</b><Input placeholder='Enter who to assign the task to' />
                <br />



            </Modal>
        </>
    );
};
export default InputModal;