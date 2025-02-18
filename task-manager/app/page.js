"use client";
import { FloatButton, Table, Radio, Modal, Button, Input, Tag } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';




export default function Home() {

    const [modalVisible, setModalVisible] = useState(false);
    const [inputTask, setInputTask] = useState('');
    const [inputName, setInputName] = useState('');
    const [prio, setPrio] = useState('Low');
    const [data, setData] = useState([
        { key: '1', task: 'Write Thesis', priority: 'High', assigned: 'Max Mustermann', time: new Date(86400000).toLocaleString() },
        { key: '2', task: 'Clean the dishes', priority: 'Low', assigned: 'Jolene', time: new Date(864078000).toLocaleString() },
        { key: '3', task: 'Go for a run', priority: 'Medium', assigned: 'Florian', time: new Date(86478345000).toLocaleString() },
        { key: '4', task: 'Do nothing for 1 hour', priority: 'High', assigned: 'Christian', time: new Date(37485943685).toLocaleString() },

    ]);

    const options = [
        {
            label: 'Low',
            value: 'Low',
        },
        {
            label: 'Medium',
            value: 'Medium',
        },
        {
            label: 'High',
            value: 'High',
        },
    ];

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
            onFilter: (value, record) => record.priority.indexOf(value) === 0,
            render: (text) => {
                let color;
                if (text === 'High') {
                    color = 'red'
                } else if (text === 'Medium') {
                    color = 'yellow'
                } else {
                    color = 'green'
                }
                return (
                    <Tag color={color} key={text}>
                        {text.toUpperCase()}
                    </Tag>
                )
            }
        },
        {
            title: 'Assigned',
            dataIndex: 'assigned',
            sorter: (a, b) => a.assigned.toUpperCase > b.assigned.toUpperCase,

        },
        {
            title: 'Date added',
            dataIndex: 'time',
            sorter: (a, b) => new Date(a.time) - new Date(b.time),

        },
    ];


    const addRow = () => {

        const newRow = { key: String(data.length + 1), task: inputTask, priority: prio, assigned: inputName, time: new Date().toLocaleString() };
        setData([...data, newRow]);
    };


    const handlePrioChange = ({ target: { value } }) => {
        setPrio(value)
    }
    const handleNameChange = (e) => {
        setInputName(e.target.value);
    };

    const handleInputChange = (e) => {
        setInputTask(e.target.value);
    };
    const handleModalOk = (text) => {
        addRow();
        handleInputChange(text);
        setModalVisible(false);
    };

    const handleModalCancel = () => {
        setModalVisible(false);
    };

    return (
        <html lang="en">

            <body>
                <h1 className={styles.center}>Next-gen Task Manager</h1>
                <Table columns={columns}
                    dataSource={data}
                    pagination={false}
                    showSorterTooltip={{
                        target: 'sorter-icon',
                    }} />
                <br />
                <div>
                    <Modal
                        title="Enter Task"
                        visible={modalVisible}
                        footer={[
                            <Button key="cancel" onClick={handleModalCancel}>
                                Cancel
                            </Button>,
                            <Button key="ok" type="primary" onClick={handleModalOk}>
                                OK
                            </Button>,
                        ]}>
                        <b>Task:</b><Input
                            type="text"
                            placeholder='Enter your task'
                            value={inputTask}
                            onChange={handleInputChange}
                        />
                        <br /><br />
                        <b>Select priority:</b>
                        <br />
                        <Radio.Group options={options} onChange={handlePrioChange} value={prio} optionType="button" />
                        <br />
                        <br />
                        <b>Assigned to:</b><Input
                            type="text"
                            placeholder='Enter who to assign the task to'
                            value={inputName}
                            onChange={handleNameChange} />
                        <br />
                    </Modal>
                </div>
                <FloatButton
                    icon={<FileTextOutlined />}
                    onClick={() => setModalVisible(true)}
                    description="New Task"
                    type='primary'
                    shape="square"
                    style={{
                        right: 24,
                    }}></FloatButton>

                    
            </body>
        </html>
    );
}

