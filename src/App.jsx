import "./App.css";
import LearnHooks from "./components/hooks/LearnHooks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UseStateLearn from "./components/hooks/all-hooks/use-state-learn";
import UseEffectLearn from "./components/hooks/all-hooks/useEffect/use-effetc-learn";

import TickTackToe from "./components/pages/projects/tick-tack-toe/tick-tack-toe";
import Explorer from "./components/challenges/explorer/explorer";
import ThinkInReact from "./components/hooks/thinking-in-react/think-in-react";
import RespondEvent from "./components/respond-events";
import AppHeader from "./components/header";
import { Row, Col } from "antd";
import StateComponentsMemory from "./components/respond-events/StateComponentsMemory";
import UseReducerLearn from "./components/hooks/all-hooks/use-reducer-learn";
import UseRefLearn from "./components/hooks/all-hooks/use-ref-learn";
import LearnCustomHooks from "./components/hooks/all-hooks/learn-custom-hooks/LearnCustomHooks";
import LearnUseContext from "./components/hooks/all-hooks/use-context/learn-use-context";
import SearchSuggestions from "./components/learn-basic-features/search-suggestion/SearchSuggestion";
import CarouselsWrapper from "./components/challenges/custom-caraousal/Caraousals";
import CounterWrapper from "./components/challenges/counter/CounterWrapper";
import ToDoAppChallenge from "./components/challenges/todo-app/ToDoAppChallenge";
import SearchBox from "./components/challenges/sugeetions/Suggestions";
import Practice from "./components/practice/practice";

function App() {
  return (
    <Router>
      <Row>
        {/* <Col span={6}>
          <AppHeader />
        </Col> */}
        <Col span={18}>
          <Routes>
            {/* <Route path="/" element={< AppHeader/>} /> */}

            <Route path="/think-in-react" element={<ThinkInReact />} />

            {/* ----------- */}
            <Route
              path="/state-component-memory"
              element={<StateComponentsMemory />}
            />
            <Route path="/respond-events" element={<RespondEvent />} />

            {/* -------------------------- */}

            {/* --------------- */}
            <Route path="/Hooks" element={<LearnHooks />} />
            <Route path="/Hooks/UseState" element={<UseStateLearn />} />
            <Route path="/Hooks/UseEffect" element={<UseEffectLearn />} />
            <Route path="/Hooks/UseRef" element={<UseRefLearn />} />
            <Route path="/Hooks/UseReducer" element={<UseReducerLearn />} />
            <Route
              path="/Hooks/LearnUseContext"
              element={<LearnUseContext />}
            />
            <Route
              path="/Hooks/LearnCustomHooks"
              element={<LearnCustomHooks />}
            />
            {/* "Heoolo" */}

            {/* ---------------------- */}
            <Route path="/tick-tack-toe" element={<TickTackToe />} />

            {/* --------------------- */}
            <Route path="/explorer" element={<Explorer />} />
            <Route path="/suggestion" element={<SearchSuggestions />} />
            <Route path="/carousel" element={<CarouselsWrapper />} />
            <Route path="/counter" element={<CounterWrapper />} />
            <Route path="/todo-app" element={<ToDoAppChallenge />} />
            <Route path="/search-box" element={<SearchBox />} />
            {/* --------------------- */}
            <Route path="/practice" element={<Practice />} />
          </Routes>
        </Col>
      </Row>
    </Router>
  );
}

export default App;
