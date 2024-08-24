import { useState , useEffect} from "react";
import { sculptureList } from "./data";

const defaultIndex = 0;

const StateComponentsMemory = () => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex); 
  const [toggleDetails, setToggleDetails] = useState(false)

  const hasNextIndex = activeIndex < sculptureList.length - 1;
  const hasPrevIndex =  activeIndex > 0;
  
  const activeSculpture = sculptureList[activeIndex];

  const handleNext = () => {
    if(hasNextIndex) {
      setActiveIndex(activeIndex + 1);
    }
  }
  const handlePrev = () => {
    if(hasPrevIndex) {
      setActiveIndex(activeIndex - 1);
    }
  }

  return (
    <div>
      <button onClick={handlePrev} disabled={!hasPrevIndex}>Back</button>
      <button onClick={handleNext} disabled={!hasNextIndex}>Next</button>
      <h2>{activeSculpture.name} by {activeSculpture.artist}</h2>
      <h3 onClick={handlePrev}>showing {activeIndex + 1} of {sculptureList.length} data</h3>
      <button 
       onClick={() =>{
        setToggleDetails(!toggleDetails)
      }}>
        {!toggleDetails ? "Show Details" : "hide details" }
      </button>
     { toggleDetails && <p>{activeSculpture.description}</p>}
      <div>
        <img src={activeSculpture.url} alt={activeSculpture.alt}/>
      </div>

      <br/>
      <RequestTracker /> 
      <br/>
      <ChatApp />
      <br/>
      <Form />
      <br/>
      <EditProfile />

      
    </div>
  )
}

 

function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(pending + 1);
    await delay(3000);
    setPending(pending => pending - 1);
    setCompleted(completed => completed + 1);
  }

  // async function handleClick() {
  //   setPending(pending + 1);
  //   await delay(3000);
  //   setPending(pending - 1);
  //   setCompleted(completed + 1);
  // }

  return (
    <>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy     
      </button>
    </>
  );
}

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

 

const serverUrl = 'https://localhost:1234'; 


export function createConnection(serverUrl, roomId) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
    }
  };
}


function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return <h1>Welcome to the {roomId} room!</h1>;
}

  function ChatApp(){
  const [roomId, setRoomId] = useState('general');
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom roomId={roomId} />
    </>
  );
}


// ------------------------

 
 function Form() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return <h1>{`That's right!`}</h1>
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={
          answer.length === 0 ||
          status === 'submitting'
        }>
          Submit
        </button>
        {error !== null &&
          <p className="Error">
            {error.message}
          </p>
        }
      </form>
    </>
  );
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima'
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}

 

  function EditProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState('Jane');
  const [lastName, setLastName] = useState('Jacobs');

  return (
    <form onSubmit={e => {
      e.preventDefault();
      setIsEditing(!isEditing);
    }}>
      <label>
        First name:{' '}
        {isEditing ? (
          <input
            value={firstName}
            onChange={e => {
              setFirstName(e.target.value)
            }}
          />
        ) : (
          <b>{firstName}</b>
        )}
      </label>
      <label>
        Last name:{' '}
        {isEditing ? (
          <input
            value={lastName}
            onChange={e => {
              setLastName(e.target.value)
            }}
          />
        ) : (
          <b>{lastName}</b>
        )}
      </label>
      <button type="submit">
        {isEditing ? 'Save' : 'Edit'} Profile
      </button>
      <p><i>Hello, {firstName} {lastName}!</i></p>
    </form>
  );
}

 
 




export default StateComponentsMemory;
