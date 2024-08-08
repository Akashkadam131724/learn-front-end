// Header.jsx
import { Link } from 'react-router-dom';
import {   Menu } from 'antd';
 
const { SubMenu } = Menu;

const AppHeader = () => {
  return (
    <div  className="app-header">
      <Menu  defaultSelectedKeys={['1']}  mode="inline"  style={{
      width: 256, height: "100vh"
    }}>
        
        <Menu.Item key="1"><Link to="/">Homepage</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/Counter">Counter</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/explorer">Explorer</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/think-in-react">Think In React</Link></Menu.Item>
        <SubMenu key="5" title="Hooks">
          <Menu.Item key="7"><Link to="/Hooks/UseState">UseState Learn</Link></Menu.Item>
          <Menu.Item key="8"><Link to="/Hooks/UseEffect">UseEffect Learn</Link></Menu.Item>
        </SubMenu>
        <Menu.Item key="9"><Link to="/Timer">Timer</Link></Menu.Item>
        <Menu.Item key="10"><Link to="/tick-tack-toe">Tick Tack Toe</Link></Menu.Item>
        <Menu.Item key="11"><Link to="/respond-events">Respond Events</Link></Menu.Item>
      </Menu>
    </div>
  );
};

export default AppHeader;
