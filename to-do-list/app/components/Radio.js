"use client";
import React, { useState } from 'react';
import { Radio } from 'antd';
const plainOptions = ['Low', 'Medium', 'High'];
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
const optionsWithDisabled = [
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
        disabled: true,
    },
];
const App = () => {
    const [value, setValue] = useState('Low');

    const onChange = ({ target: { value } }) => {
        console.log('radio checked', value);
        setValue(value);
    };

    return (
        <>
            <br />
            <Radio.Group options={options} onChange={onChange} value={value} optionType="button"/>
            <br />
        </>
    );
};
export default App;