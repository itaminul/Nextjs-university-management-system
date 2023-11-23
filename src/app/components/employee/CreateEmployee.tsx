'use client'
import { SettingOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import type { CollapseProps } from 'antd';
import { Collapse, Modal, Select } from 'antd';
import { CreateEmployeeProps } from './EmployeeType';
import CreateEmployeeForm from './CreateEmployeeForm';

const { Option } = Select;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

type ExpandIconPosition = 'start' | 'end';

function CreateEmployee ({visible, title, onCancel}:CreateEmployeeProps) {
  const [expandIconPosition, setExpandIconPosition] = useState<ExpandIconPosition>('start');

  
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const genExtra = () => (
    <SettingOutlined
      onClick={(event) => {
        event.stopPropagation();
      }}
    />
  );

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'This is panel header 1',
      children: <div>{text}</div>,
      extra: genExtra(),
    },
    {
      key: '2',
      label: 'This is panel header 2',
      children: <div>{text}</div>,
      extra: genExtra(),
    },
    {
      key: '3',
      label: 'This is panel header 3',
      children: <div>{text}</div>,
      extra: genExtra(),
    },
  ];

  return (
    <>
      <Modal 
      width="400"
      title={title}
      open={visible}
      onCancel={onCancel}
      >
      <Collapse
        defaultActiveKey={['1']}
        onChange={onChange}
        expandIconPosition={expandIconPosition}
      >
        <CreateEmployeeForm />
      </Collapse>
      </Modal>
    </>
  );
};

export default CreateEmployee;