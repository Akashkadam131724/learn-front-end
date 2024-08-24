import "./App.css";
import LearnHooks from "./components/hooks/LearnHooks";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import UseStateLearn from "./components/hooks/all-hooks/use-state-learn";
import UseEffectLearn from "./components/hooks/all-hooks/use-effetc-learn";

import Counter from "./components/learn-basic-features/counter/Counter";
import Timer from "./components/pages/projects/timer/timer";
import TickTackToe from "./components/pages/projects/tick-tack-toe/tick-tack-toe";
import Explorer from "./components/challenges/explorer/explorer";
import ThinkInReact from "./components/hooks/thinking-in-react/think-in-react";
import RespondEvent from "./components/respond-events";
import AppHeader from "./components/header";
import {  Row,Col } from "antd";
import StateComponentsMemory from "./components/respond-events/StateComponentsMemory";
import UseReducerLearn from "./components/hooks/all-hooks/use-reducer-learn";
import UseRefLearn from "./components/hooks/all-hooks/use-ref-learn";

function App() {
  return (
    <Router>
      <Row  >  
        <Col span={6}>
          <AppHeader />
          </Col>
       <Col span={18}>
          <Routes>
              {/* <Route path="/" element={< AppHeader/>} /> */}
              <Route path="/Counter" element={<Counter />} />
              <Route path="/think-in-react" element={<ThinkInReact />} />
              <Route path="/state-component-memory" element={<StateComponentsMemory />} />

              {/* --------------- */}
              <Route path="/Hooks" element={<LearnHooks />} />
              <Route path="/Hooks/UseState" element={<UseStateLearn />} />
              <Route path="/Hooks/UseEffect" element={<UseEffectLearn />} />
              <Route path="/Hooks/UseRef" element={<UseRefLearn />} />
              <Route path="/Hooks/UseReducer" element={<UseReducerLearn/>} />

              {/* -------------------------- */}
              <Route path="/respond-events" element={<RespondEvent />} />
              <Route path="/respond-events" element={<RespondEvent />} />
              {/* ---------------------- */}
              <Route path="/tick-tack-toe" element={<TickTackToe />} />
              {/* --------------------- */}
              <Route path="/explorer" element={<Explorer />} />
              <Route path="/Timer" element={<Timer />} />
            </Routes>
        </Col>
      </Row>
  </Router>

  );
}

export default App;
