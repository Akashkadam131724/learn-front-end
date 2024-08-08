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
 

 


function App() {
  return (
    <Router>
      <Row gutter={[64,0]}>
        <Col span={4}>
         <AppHeader />
        </Col>
        <Col span={20}>
          <Routes>
              <Route path="/" element={<Counter />} />
              <Route path="/Counter" element={<Explorer />} />
              <Route path="/explorer" element={<Explorer />} />
              <Route path="/think-in-react" element={<ThinkInReact />} />
              <Route path="/Hooks" element={<LearnHooks />} />
              <Route path="/Hooks/UseState" element={<UseStateLearn />} />
              <Route path="/Hooks/UseEffect" element={<UseEffectLearn />} />
              <Route path="/Timer" element={<Timer />} />
              <Route path="/tick-tack-toe" element={<TickTackToe />} />
              <Route path="/respond-events" element={<RespondEvent />} />
            </Routes>
        </Col>
      </Row>
  </Router>

  );
}

export default App;
