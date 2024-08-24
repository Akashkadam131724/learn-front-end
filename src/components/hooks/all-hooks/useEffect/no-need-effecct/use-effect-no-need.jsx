//-------------- You Might not need an effect -------------------------------------------------- need to be divided into individual components
import ChallengeOneNoNeedEffect from "./challenges/challenge1/challenge1"
import { Divider } from "antd";
import ChallengeTwoNoNeedEffect from "./challenges/challenge2/challenge2"
import NoNeedEffectChallenge3 from "./challenges/challenge3/challenge3";

const NOneedEffect = () => {
  return <><h4>You’ll likely also want to add some logic for error handling and to track whether the content is loading. You can build a Hook like this yourself or use one of the many solutions already available in the React ecosystem. Although this alone won’t be as efficient as using a framework’s built-in data fetching mechanism, moving the data fetching logic into a custom Hook will make it easier to adopt an efficient data fetching strategy later.
<br/>
<br/>
  In general, whenever you have to resort to writing Effects, keep an eye out for when you can extract a piece of functionality into a custom Hook with a more declarative and purpose-built API like useData above. The fewer raw useEffect calls you have in your components, the easier you will find to maintain your application.
  <br/>
      <br/>
  Recap<br/>
  <br/>
  If you can calculate something during render, you don’t need an Effect.<br/>
      <br/>
  To cache expensive calculations, add useMemo instead of useEffect.<br/>
      <br/>
  To reset the state of an entire component tree, pass a different key to it.<br/>
      <br/>
  To reset a particular bit of state in response to a prop change, set it during rendering.<br/>
      <br/>
  Code that runs because a component was displayed should be in Effects, the rest should be in events.<br/>
      <br/>
  If you need to update the state of several components, it’s better to do it during a single event.<br/>
      <br/>
  Whenever you try to synchronize state variables in different components, consider lifting state up.<br/>
      <br/>
  You can fetch data with Effects, but you need to implement cleanup to avoid race conditions.
  </h4>
  <h2>Challenges</h2>
  <ChallengeOneNoNeedEffect />
  <Divider />
  <ChallengeTwoNoNeedEffect />
  <Divider />
  <NoNeedEffectChallenge3 />
  </>;
};

export default NOneedEffect;

// -- examples
