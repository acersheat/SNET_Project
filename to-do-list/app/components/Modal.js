"use client";
import React, { useState } from 'react';
import { FloatButton, Modal, Input } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import Radio from './Radio';


const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <FloatButton
                icon={<FileTextOutlined />}
                onClick={showModal}
                description="New Task"
                type='primary'
                shape="square"
                style={{
                    right: 24,
                }}
            />
            <Modal title="Add your task" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <b>Task:</b><Input placeholder='Enter your task' />
                <br /><br />
                <b>Select priority:</b><Radio />
                <br />
                <b>Assigned to:</b><Input placeholder='Enter who to assign the task to' />
                <br />



            </Modal>
        </>
    );
};
export default App;