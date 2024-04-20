"use client";
import React, { useState } from 'react';
import { Modal, Input, Button } from 'antd';
import Priority from './Radio';





const InputModal = ({visible, onCancel, onOk}) => {
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

            <Modal 
                title="Enter Task"
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
                <b>Select priority:</b><Priority />
                <br />
                <b>Assigned to:</b><Input placeholder='Enter who to assign the task to' />
                <br />
                

                
            </Modal>
            
            
        </>


    );
};
export default InputModal;