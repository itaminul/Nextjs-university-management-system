import { useState, ReactNode } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
interface CollapseProps {
  title: string;
  children: ReactNode;
  panelStyles?: React.CSSProperties;
  iconOpen?: JSX.Element;
  iconClosed?: JSX.Element;
}


const Collapse: React.FC<CollapseProps> = ({
  title,
  children,
  panelStyles = {},
  iconOpen = <FiChevronUp />,
  iconClosed = <FiChevronDown />, 
}) => {

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };


  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          ...panelStyles,
          background: '#f0f0f0',
          padding: '8px',
          cursor: 'pointer',
        }}
        onClick={toggleCollapse}
      >
        {isCollapsed ? iconClosed : iconOpen}
        <h2 style={{ marginLeft: '8px' }}>{title}</h2>
      </div>
      {isCollapsed ? null : <div style={{ border: '1px solid #ccc', padding: '16px' }}>{children}</div>}
    </div>
  );
};

export default Collapse;
