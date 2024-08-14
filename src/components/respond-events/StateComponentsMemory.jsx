import { useState } from "react";
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
      
    </div>
  )

}

 

function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(pending + 1);
    await delay(3000);
    setPending(pending =>pending - 1);
    setCompleted(completed => completed + 1);
  }

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


export default StateComponentsMemory;
