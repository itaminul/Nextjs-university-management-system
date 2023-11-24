'use client'
import { SettingOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Collapse, Modal } from 'antd';
import { CreateEmployeeProps } from './EmployeeType';
import CreateEmployeeForm from './CreateEmployeeForm';

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