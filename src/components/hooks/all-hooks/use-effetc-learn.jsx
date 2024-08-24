import { Divider } from 'antd';
import { useState, useRef, useEffect } from 'react';

const UseEffectLearn = () => {
 
 
    // useEffect(() => {
    //   // Code here will run after *every* render
    //   console.log("Hello useEffectLearn without dependencies");
      
    // });
  

  return (
    <div>
     <h4>
        <a href='https://react.dev/learn/synchronizing-with-effects' rel="noopener noreferrer" target='_blank' >Basic</a>
     </h4>
      <h4>Introduction : 
      To write an Effect, follow these three steps:

      Declare an Effect. By default, your Effect will run after every commit.
      Specify the Effect dependencies. Most Effects should only re-run when needed rather than after every render. For example, a fade-in animation should only trigger when a component appears. Connecting and disconnecting to a chat room should only happen when the component appears and disappears, or when the chat room changes. You will learn how to control this by specifying dependencies.
      Add cleanup if needed. Some Effects need to specify how to stop, undo, or clean up whatever they were doing. For example, “connect” needs “disconnect”, “subscribe” needs “unsubscribe”, and “fetch” needs either “cancel” or “ignore”. You will learn how to do this by returning a cleanup function.
      </h4>
      <h5>By wrapping the DOM update in an Effect, you let React update the screen first. Then your Effect runs.</h5>
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

      {/* <button onClick={handleClick}>update</button> */}
      <h3>Example one </h3>
      <MyVideoPlayer />
      <Divider />
      <ChatRoom />
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

  //   <React.StrictMode>
//   Strict Mode enables the following development-only behaviors:

// Your components will re-render an extra time to find bugs caused by impure rendering.
// Your components will re-run Effects an extra time to find bugs caused by missing Effect cleanup.
// Your components will be checked for usage of deprecated APIs.

  return <h1>Welcome to the chat!</h1>;
}



export default UseEffectLearn;
