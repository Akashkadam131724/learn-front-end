import { Link } from "react-router-dom";

const LearnHooks = () => {
  return (
    <div>
      <Link to={"/Hooks/useState"}>UseState</Link>
      <br></br>
      <Link to={"/Hooks/useEffect"}>useEffect</Link>
    </div>
  );
};

export default LearnHooks;
