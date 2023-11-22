import { useState, ReactNode } from 'react';

interface CollapseProps {
  title: string;
  children: ReactNode;
  lable: string;
}

const Collapse: React.FC<CollapseProps> = ({ title, children, lable }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div   style={{
      display: 'flex',
      alignItems: 'center',
      background: '#f0f0f0',
      padding: '8px',
      cursor: 'pointer',
    }}
    onClick={toggleCollapse}
    >
      <h2>{lable}</h2>
      {isCollapsed ? null : <div style={{ border: '1px solid #ccc', padding: '16px' }}>{children}</div>}
    </div>
  );
};

export default Collapse;
