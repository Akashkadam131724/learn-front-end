// Header.jsx
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const AppHeader = () => {
  const menuItems = [
    {
      key: '1',
      label: <Link to="/">Homepage</Link>,
    },
    {
      key: '2',
      label: <Link to="/Counter">Counter</Link>,
    },
    {
      key: '4',
      label: <Link to="/think-in-react">Think In React</Link>,
    },
    {
      key: '11',
      label: 'Adding inter activity',
      children: [
        {
          key: 'aa7',
          label: <Link to="/respond-events">Respond Events</Link>,
        },
        {
          key: '8sas',
          label: <Link to="/state-component-memory">{`State A Component's memory`}</Link>,
        },
      ],
    },
    {
      key: 'ss',
      label: <a href='https://react.dev/learn/managing-state'  target="_blank"
      rel="noopener noreferrer">
        Managing state Important
        </a> ,
    },
    {
      key: '13',
      label: 'Escape hatches',
      children: [
        {
          key: '82',
          label: (
            <a
              href="https://react.dev/learn/referencing-values-with-refs"
              target="_blank"
              rel="noopener noreferrer"
            >
              referencing-values-with-refs
            </a>
          ),
        },
        {
          key: '83a',
          label: (
            <a
              href="https://react.dev/learn/manipulating-the-dom-with-refs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Manipulating DOM Elements
            </a>
          ),
        },
        {
          key: '8a3',
          label: (
            <a
              href="https://react.dev/learn/synchronizing-with-effects"
              target="_blank"
              rel="noopener noreferrer"
            >
              synchronizing-with-effects
            </a>
          ),
        },
         {
           key: '8aa3',
          label: (
            <a
              href="https://react.dev/learn/you-might-not-need-an-effect"
              target="_blank"
              rel="noopener noreferrer"
            >
            you-might-not-need-an-effect
            </a>
          ),
        },
         {
           key: '8aa3A',
          label: (
            <a
              href="https://react.dev/learn/lifecycle-of-reactive-effects"
              target="_blank"
              rel="noopener noreferrer"
            >
          Lifecycle of Reactive Effects
            </a>
          ),
        },
      ],
    },
    {
      key: '5',
      label: 'Hooks',
      children: [
        {
          key: '7aas',
          label: <Link to="/Hooks/UseState">UseState Learn</Link>,
        },
        {
          key: '8a',
          label: <Link to="/Hooks/UseEffect">UseEffect Learn</Link>,
        },
        {
          key: '8as',
          label: <Link to="/Hooks/useRef">UseRef Learn</Link>,
        },
      ],
    },
    {
      key: '7',
      label: 'Mini projects',
      children: [
        {
          key: '10',
          label: <Link to="/tick-tack-toe">Tick Tack Toe</Link>,
        },
        {
          key: '9',
          label: <Link to="/Timer">Timer</Link>,
        },
      ],
    },
    {
      key: '8',
      label: 'Challenges',
      children: [
        {
          key: '3asa',
          label: <Link to="/explorer">Explorer</Link>,
        },
      ],
    },
  ];

  return (
    <div className="app-header">
      <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
        style={{ height: '100vh', width: '100%' }}
        items={menuItems}
      />
    </div>
  );
};

export default AppHeader;
