'use client'
import React, { useState } from 'react';
import { Collapse, Modal } from 'antd';
import { CreateEmployeeProps } from './EmployeeType';
import CreateEmployeeForm from './CreateEmployeeForm';
type ExpandIconPosition = 'start' | 'end';
function CreateEmployee ({visible, title, onCancel}:CreateEmployeeProps) {
  const [expandIconPosition, setExpandIconPosition] = useState<ExpandIconPosition>('start');
    const onChange = (key: string | string[]) => {
  };
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
        <CreateEmployeeForm onCancel={onCancel} visible={visible} title="Create Employee" />
      </Collapse>
      </Modal>
    </>
  );
};

export default CreateEmployee;