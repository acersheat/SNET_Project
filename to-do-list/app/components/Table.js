"use client";
import { React, useState } from 'react';
import { Table, Button } from 'antd';

const MyTable = () => {


  // Other table rendering and logic
};


// const data = [
//   {
//     key: '1',
//     task: 'italyayi isgal et',
//     priority: 'Low',
//     assigned: 'baban',
//     status: 'In Progress'
//   },
//   {
//     key: '2',
//     task: 'bi kac savas sucu isle',
//     priority: 'Medium',
//     assigned: 'anan',
//     status: 'Done',
//   },
//   {
//     key: '3',
//     task: 'surahiye su koy',
//     priority: 'High',
//     assigned: 'bacin',
//     status: 'Not started',
//   },

// ];
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const App = () => {
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

  // Function to add a new row
  const addRow = (enteredTask) => {
    const newRow = { key: String(data.length + 1), task: enteredTask, priority: 'low', assigned: 'bana', status: 'in progres' };
    setData([...data, newRow]);
  };
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        pagination={false}
        showSorterTooltip={{
          target: 'sorter-icon',
        }}
      />
      <Button onClick={addRow}>Add Row</Button>
    </div>


  )
};

export default App;