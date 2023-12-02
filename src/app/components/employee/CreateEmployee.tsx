'use client'
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
  return (
    <>
      <Modal 
      title={title}
      open={visible}
      width="100"
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