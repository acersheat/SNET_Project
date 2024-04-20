"use client";
import InputModal from "./InputModal";
import styles from "../page.module.css"
import { FloatButton, Table } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { useState } from 'react';



export default function Page() {

    const columns = [
        {
            title: 'Task',
            dataIndex: 'task',
            showSorterTooltip: {
                target: 'full-header',
            },
        },
        {
            title: 'Priority',
            dataIndex: 'priority',
            filters: [
                {
                    text: 'Low',
                    value: 'Low',
                },
                {
                    text: 'Medium',
                    value: 'Medium',
                },
                {
                    text: 'High',
                    value: 'High',
                },

            ],

            //sorter: (a, b) => a.age - b.age,
            onFilter: (value, record) => record.priority.indexOf(value) === 0,
        },
        {
            title: 'Assigned',
            dataIndex: 'assigned',

        },
        {
            title: 'Status',
            dataIndex: 'status',

        },
    ];
    const [data, setData] = useState([
        { key: '1', task: 'ananin amina koymaca', priority: 'High', assigned: '123 Elm Street', status: '123 Elm Street' },
        { key: '2', task: 'listen berfin yappin', priority: 'low', assigned: '123 Elm Street', status: '123 Elm Street' },
        { key: '3', task: '78 dk tuvaltte sic', priority: 'medium', assigned: '123 Elm Street', status: '123 Elm Street' },
        { key: '4', task: 'bulasik yika', priority: 'medium', assigned: '123 Elm Street', status: '123 Elm Street' },
        // Other initial rows
    ]);

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };

    const [modalVisible, setModalVisible] = useState(false); // Initialize visible state to false
    const [inputText, setInputText] = useState('');

    const addRow = (task) => {

        const newRow = { key: String(data.length + 1), task: task, priority: 'low', assigned: "name", status: 'in progres' };
        setData([...data, newRow]);
      };

    const handleModalOk = (text) => {
        setInputText(text);
        addRow(text);
        setModalVisible(false);
    };

    const handleModalCancel = () => {
        setModalVisible(false);
    };

    return (
        <html lang="en">

            <body >
                <Table columns={columns}
                    dataSource={data}
                    onChange={onChange}
                    pagination={false}
                    showSorterTooltip={{
                        target: 'sorter-icon',
                    }} />
                <br/>
                <div>
                <InputModal 
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
