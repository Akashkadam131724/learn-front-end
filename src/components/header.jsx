import { Link } from "react-router-dom";
import { Menu } from "antd";

export const menuItems = [
  {
    key: "1",
    label: <Link to="/">Homepage</Link>,
  },
  {
    key: "1a",
    label: (
      <a
        href="https://react.dev/learn"
        target="_blank"
        rel="noopener noreferrer"
      >
        React original docs
      </a>
    ),
  },
  {
    key: "4",
    label: <Link to="/think-in-react">Think In React</Link>,
  },
  {
    key: "11",
    label: "Adding interactivity",
    children: [
      {
        key: "aa7",
        label: <Link to="/respond-events">Respond Events</Link>,
      },
      {
        key: "8sas",
        label: (
          <Link to="/state-component-memory">{`State A Component's memory`}</Link>
        ),
      },
      {
        key: "8asdasd2",
        label: (
          <a
            href="https://react.dev/learn/render-and-commits"
            target="_blank"
            rel="noopener noreferrer"
          >
            render-and-commits
          </a>
        ),
      },
      {
        key: "82ddd",
        label: (
          <a
            href="https://react.dev/learn/state-as-a-snapshot"
            target="_blank"
            rel="noopener noreferrer"
          >
            state-as-a-snapshot
          </a>
        ),
      },
      {
        key: "82aaaa",
        label: (
          <a
            href="https://react.dev/learn/queueing-a-series-of-state-updates"
            target="_blank"
            rel="noopener noreferrer"
          >
            queueing-a-series-of-state-updates
          </a>
        ),
      },
      {
        key: "8222",
        label: (
          <a
            href="https://react.dev/learn/updating-objects-in-state"
            target="_blank"
            rel="noopener noreferrer"
          >
            updating-objects-in-state
          </a>
        ),
      },
      {
        key: "8aaad2",
        label: (
          <a
            href="https://react.dev/learn/updating-arrays-in-state"
            target="_blank"
            rel="noopener noreferrer"
          >
            updating-arrays-in-state
          </a>
        ),
      },
      {
        key: "80002",
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
    ],
  },
  {
    key: "ss",
    label: (
      <a
        href="https://react.dev/learn/managing-state"
        target="_blank"
        rel="noopener noreferrer"
      >
        Managing state Important
      </a>
    ),
  },
  {
    key: "13",
    label: "Escape hatches",
    children: [
      {
        key: "82",
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
        key: "83a",
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
        key: "8a3",
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
        key: "8aa3",
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
        key: "8aa3A",
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
      {
        key: "8aa3sA",
        label: (
          <a
            href="https://react.dev/learn/separating-events-from-effects"
            target="_blank"
            rel="noopener noreferrer"
          >
            separating-events-from-effects
          </a>
        ),
      },
      {
        key: "8aa3ssA",
        label: (
          <a
            href="https://react.dev/learn/removing-effect-dependencies"
            target="_blank"
            rel="noopener noreferrer"
          >
            removing-effect-dependencies
          </a>
        ),
      },
      {
        key: "8aa3ssAs",
        label: (
          <a
            href="https://react.dev/learn/reusing-logic-with-custom-hooks"
            target="_blank"
            rel="noopener noreferrer"
          >
            Custom Hooks
          </a>
        ),
      },
    ],
  },
  {
    key: "5",
    label: "Hooks",
    children: [
      {
        key: "7aas",
        label: <Link to="/Hooks/UseState">UseState </Link>,
      },
      {
        key: "8a",
        label: <Link to="/Hooks/UseEffect">UseEffect </Link>,
      },
      {
        key: "8as",
        label: <Link to="/Hooks/UseRef">UseRef </Link>,
      },
      {
        key: "s8asa",
        label: <Link to="/Hooks/UseReducer">UseReducer </Link>,
      },
      {
        key: "s8asaaa",
        label: <Link to="/Hooks/LearnUseContext">LearnUseContext </Link>,
      },
      {
        key: "8asass",
        label: <Link to="/Hooks/LearnCustomHooks">LearnCustomHooks </Link>,
      },
      {
        key: "8asasss",
        label: (
          <a
            href="https://react.dev/learn/scaling-up-with-reducer-and-context"
            target="_blank"
            rel="noopener noreferrer"
          >
            useContext with reducer
          </a>
        ),
      },
    ],
  },
  {
    key: "7",
    label: "Mini projects",
    children: [
      {
        key: "10",
        label: <Link to="/tick-tack-toe">Tick Tack Toe</Link>,
      },
    ],
  },
  {
    key: "8",
    label: "Challenges",
    children: [
      {
        key: "Challenges1",
        label: <Link to="/counter">Counter</Link>,
      },
      {
        key: "Challenges2",
        label: <Link to="/todo-app">To do App</Link>,
      },
      {
        key: "3asa",
        label: <Link to="/explorer">Explorer</Link>,
      },
      {
        key: "3asas",
        label: <Link to="/carousel">Carousels</Link>,
      },
      {
        key: "3asaas",
        label: <Link to="/search-box">Search</Link>,
      },
    ],
  },
  {
    key: "Challenges",
    label: "Practice",
    children: [
      {
        key: "Challenges1",
        label: <Link to="/practice">practice</Link>,
      },
    ],
  },
];

const AppHeader = () => {
  return (
    <div className="app-header">
      <Menu
        defaultSelectedKeys={["1"]}
        mode="inline"
        style={{ height: "100vh", width: "100%" }}
        items={menuItems}
      />
    </div>
  );
};

export default AppHeader;
