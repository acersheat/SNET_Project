"use client";
import Table from "./Table";
import InputModal from "./Modal";
import styles from "../page.module.css"
import { FloatButton } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Button } from 'antd';


export default function Page() {

    const [modalVisible, setModalVisible] = useState(false); // Initialize visible state to false
    const [inputText, setInputText] = useState('');

    const handleModalOk = (text) => {
        setInputText(text);
        setModalVisible(false);
    };

    const handleModalCancel = () => {
        setModalVisible(false);
    };

    return (
        <html lang="en">

            <body >
                <Table />
                <br/>
                <div>
                    <InputModal
                        title="Add your task"
                        visible={modalVisible}
                        onCancel={handleModalCancel}
                        onOk={handleModalOk}
                    />
                </div>
                <FloatButton
                    icon={<FileTextOutlined />}
                    onClick={() => setModalVisible(true)}
                    description="New Task"
                    type='primary'
                    shape="square"
                    style={{
                        right: 24,
                    }}
                />
            </body>
        </html>
    );
}
