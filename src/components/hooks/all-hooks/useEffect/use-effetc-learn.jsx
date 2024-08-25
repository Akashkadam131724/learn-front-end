import { Divider } from 'antd';
import { useState, useRef, useEffect } from 'react';
// import { experimental_useEffectEvent as useEffectEvent } from 'react';

import NOneedEffect from './no-need-effecct/use-effect-no-need';

const UseEffectLearn = () => {
 
 
    // useEffect(() => {
    //   // Code here will run after *every* render
    //   console.log("Hello useEffectLearn without dependencies");
      
    // });
  

  return (
    <div>
     <h4>
        <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures' rel="noopener noreferrer" target='_blank' >Think should know before:  -  Closures</a>
     </h4>
       <h4>
        <a href='https://maxrozen.com/race-conditions-fetching-data-react-with-useeffect' rel="noopener noreferrer" target='_blank' >Think should know before: 1 - Race conditions</a>
     </h4>
     <h4>
        <a href='https://developer.mozilla.org/en-US/docs/Web/API/AbortController' rel="noopener noreferrer" target='_blank' >Think should know before:  -  Abort controller Optional (ignore flag)</a>
     </h4>
     <h4>
        <a href='https://react.dev/learn/synchronizing-with-effects' rel="noopener noreferrer" target='_blank' >Basic</a>
     </h4>
    
      <h4>Introduction : 
      <br/>
      <br/>
      Some components need to synchronize with external systems. For example, you might want to control a non-React component based on the React state, set up a server connection, or send an analytics log when a component appears on the screen. Effects let you run some code after rendering so that you can synchronize your component with some system outside of React.
      <br/>
      <br/>
      Effects are an escape hatch from the React paradigm. They let you “step outside” of React and synchronize your components with some external system like a non-React widget, network, or the browser DOM. If there is no external system involved (for example, if you want to update a component’s state when some props or state change), you shouldn’t need an Effect. Removing unnecessary Effects will make your code easier to follow, faster to run, and less error-prone.
        <br/>
        <br/>
        
      To write an Effect, follow these three steps:
      <br/>
      <br/>
      Declare an Effect. By default, your Effect will run after every commit.
      Specify the Effect dependencies. Most Effects should only re-run when needed rather than after every render. For example, a fade-in animation should only trigger when a component appears. Connecting and disconnecting to a chat room should only happen when the component appears and disappears, or when the chat room changes. You will learn how to control this by specifying dependencies.
      Add cleanup if needed. Some Effects need to specify how to stop, undo, or clean up whatever they were doing. For example, “connect” needs “disconnect”, “subscribe” needs “unsubscribe”, and “fetch” needs either “cancel” or “ignore”. You will learn how to do this by returning a cleanup function.
      </h4>
      <h5>By wrapping the DOM update in an Effect, you let React update the screen first. Then your Effect runs.</h5>

     
      <p>
        Effects from each render are isolated from each other.
        If you’re curious h
        ow this works, you 
        can read about closures.
        you will need deep understanding of closures     
      </p>
    
   

    <h1>React Effects Summery:</h1>
    <h6>
    Development-only behaviors 
    When Strict Mode is on, React remounts every component once after mount (state and DOM are preserved). This helps you find Effects that need cleanup and exposes bugs like race conditions early. Additionally, React will remount the Effects whenever you save a file in development. Both of these behaviors are development-only.
    </h6>
    <ol>
        <li>Unlike events, Effects are caused by rendering itself rather than a particular interaction.</li>
        <li>Effects let you synchronize a component with some external system (third-party API, network, etc).</li>
        <li>By default, Effects run after every render (including the initial one).</li>
        <li>React will skip the Effect if all of its dependencies have the same values as during the last render.</li>
        <li>You can’t “choose” your dependencies. They are determined by the code inside the Effect.</li>
        <li>An empty dependency array <code>[]</code> corresponds to the component “mounting”, i.e., being added to the screen.</li>
        <li>In Strict Mode, React mounts components twice (in development only!) to stress-test your Effects.</li>
        <li>If your Effect breaks because of remounting, you need to implement a cleanup function.</li>
        <li>React will call your cleanup function before the Effect runs next time, and during the unmount.</li>
    </ol>
      <Divider/>
      <pre>
  {`
      useEffect(() => {
        // This runs after every render
        });

      useEffect(() => {
        // This runs only on mount (when the component appears)
      }, []);

      useEffect(() => {
        // This runs on mount *and also* if either a or b have changed since the last render
      }, [a, b]);`
}
      </pre>
      <Divider/>
      <h3>Example one </h3>
      <MyVideoPlayer />
      <Divider />
      <h3>Example two: </h3>
      <ChatRoom />
      <Divider />
      <h3>Example three: </h3>

      <PlaygroundWrapper />

      <Divider/>
      <h4>Challenge</h4>
        <Challenge3 />
        <h5>Timer</h5>
        <Timer/>
        <h4>Un freeze timer </h4>
        {/* <Timer2 /> */}
      <Divider />
      <h1>No need effects</h1>
      <NOneedEffect/>
    </div>
  );
};


// -----------------------


function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  // if (isPlaying) {
  //   ref.current.play();  // Calling these while rendering isn't allowed.
  // } else {
  //   ref.current.pause(); // Also, this crashes.
  // }

  
  useEffect(() => {
    if (isPlaying) {
      console.log('Calling video.play()');
      ref.current.play();
    } else {
      console.log('Calling video.pause()');
      ref.current.pause();
    }
  },[isPlaying]);

  // This Effect uses both ref and isPlaying, but only isPlaying is declared as a dependency:

  // This is because the ref object has a stable identity: React 
// you’ll always get the same object from the same useRef call on every render. It
// never changes, so it will never by itself cause the Effect to re-run. Therefore, 
// it does not matter whether you include it or not. Including it is fine too:

  return <video ref={ref} src={src} loop playsInline />;
}

 function MyVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState('');
  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <br></br>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
     
        
    </>
  );
}

//----------------------------------------------------------------

function createConnection() {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log('✅ Connecting...');
    },
    disconnect() {
      console.log('❌ Disconnected.');
    }
  };
}

function ChatRoom() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, []);

  // useEffect(() => {
  //   function handleScroll(e) {
  //     console.log(window.scrollX, window.scrollY);
  //   }
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  //   <React.StrictMode>
//   Strict Mode enables the following development-only behaviors:

// Your components will re-render an extra time to find bugs caused by impure rendering.
// Your components will re-run Effects an extra time to find bugs caused by missing Effect cleanup.
// Your components will be checked for usage of deprecated APIs.

  return <h1>Welcome to the chat!</h1>;
}

//--------------------------------

 

function Playground() {
  const [text, setText] = useState('a');

  useEffect(() => {
    function onTimeout() {
      console.log('⏰ ' + text);
    }

    console.log('🔵 Schedule "' + text + '" log');
    const timeoutId = setTimeout(onTimeout, 3000);

    // return () => { // this to be removed when reading
    //   console.log('🟡 Cancel "' + text + '" log');
    //   clearTimeout(timeoutId);
    // };
  }, [text]);

  return (
    <>
      <label>
        What to log:{' '}
        <input
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </label>
      <h1>{text}</h1>
    </>
  );
}

 function PlaygroundWrapper() {
  const [show, setShow] = useState(false);
  // const [text, setText, ] = useState("");
  return (
    <>
          <h2>--Each render has its own Effects </h2>

      <button onClick={() => setShow(!show)}>
        {show ? 'Unmount' : 'Mount'} the component
      </button>
      {show && <hr />}
      
    {/* {show && <> <label>
        What to parent:{' '}
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          />
      </label>
      <h1>{text}</h1>
      
          </>} */}
      {show && <Playground />}

      
    </>
  );
}

//----------------------------------------------------------------

// Challenges

export async function fetchBio(person) {
  const delay = person === 'Bob' ? 4000 : 200;
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('This is ' + person + '’s bio.');
    }, delay);
  })
}


 

 function Challenge3() {
  const [person, setPerson] = useState('Alice');
  const [bio, setBio] = useState(null);

  // useEffect(() => {
   
  //   setBio(null);
  //   fetchBio(person).then(result => {
    
  //       setBio(result);
     
  //   });
    
  // }, [person]);


  useEffect(() => {
    let ignore = false;
    setBio(null);
    fetchBio(person).then(result => {
      if (!ignore) {
        setBio(result);
      }
    });
    return () => {
      ignore = true;
    }
  }, [person]);

  return (
    <>
      <select value={person} onChange={e => {
        setPerson(e.target.value);
      }}>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p><i>{bio ?? 'Loading...'}</i></p>
    </>
  );
}

 

export  function Timer() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + increment);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [increment]);

  return (
    <>
      <h1>
        Counter: {count}
        <button onClick={() => setCount(0)}>Reset</button>
      </h1>
      <hr />
      <p>
        Every second, increment by:
        <button disabled={increment === 0} onClick={() => {
          setIncrement(i => i - 1);
        }}>–</button>
        <b>{increment}</b>
        <button onClick={() => {
          setIncrement(i => i + 1);
        }}>+</button>
      </p>
    </>
  );
}


 

export  function Timer2() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  const onTick = useEffectEvent(() => {
    setCount(c => c + increment);
  });

  useEffect(() => {
    const id = setInterval(() => {
      onTick();
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <h1>
        Counter: {count}
        <button onClick={() => setCount(0)}>Reset</button>
      </h1>
      <hr />
      <p>
        Every second, increment by:
        <button disabled={increment === 0} onClick={() => {
          setIncrement(i => i - 1);
        }}>–</button>
        <b>{increment}</b>
        <button onClick={() => {
          setIncrement(i => i + 1);
        }}>+</button>
      </p>
    </>
  );
}




export default UseEffectLearn;
