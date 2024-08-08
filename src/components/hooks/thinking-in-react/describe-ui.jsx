import React, { useEffect, useState } from "react";

function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}

const Gallery = () => (
  <div>
    <h2>Gallery</h2>
    <Profile></Profile>
    <Profile></Profile>
    <Profile></Profile>
    <Profile></Profile>
  </div>
);
// ---------------------------------------------
const myArray = [
  <React.Fragment key={1}>
    <div>Akash</div>, <div>Hello</div>
  </React.Fragment>,
];

const RenderArray = () => {
  return <section>{myArray}</section>;
};
// ---------------------------------------------
function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

export function TodoList() {
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    // Update the date every minute (adjust the interval as needed)
    const intervalId = setInterval(() => {
      setToday(new Date());
    }, 60000); // 60000 milliseconds = 1 minute

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div style={person.theme}>
      <h1>Hedy Lamarr's Todos , Today is , {formatDate(today)}.</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </div>
  );
}
//----------------------------------------------------------------
function Card({ children }) {
  return <div className="card"> {children}</div>;
}

function ProfileTwo() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
    </Card>
  );
}

function getImageUrl(person, size = "s") {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
//----------------------------------------------------------------
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); // 1000 milliseconds = 1 second

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on mount

  const formatTime = (date) => {
    const options = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  return (
    <div>
      <h1>Current Time:</h1>
      <p>{formatTime(time)}</p>
    </div>
  );
}

//----------------------------------------------------------------
const Item = ({ isPacked, name }) => {
  let itemContent = name;
  if (isPacked) {
    itemContent = <del>{name + " ✔"}</del>;
  } else {
    itemContent = name + " ❌";
  }
  return <li className="item">{itemContent}</li>;
};

function PackingList() {
  return (
    <section>
      <h1>My PackingList</h1>
      <ul>
        <Item isPacked={true} name="Phone" />
        <Item isPacked={false} name="Towel" />
        <Item isPacked={true} name="Laptop" />
      </ul>
    </section>
  );
}
//----------------------------------------------------------------
function Drink({ name }) {
  let answer, caffine, age;
  if (name === "tea") {
    answer = "leaf";
    caffine = "15–70 mg/cup";
    age = "4,000+ years";
  } else {
    answer = "bean";
    caffine = "80–185 mg/cup";
    age = "6,000+ years";
  }

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{answer}</dd>
        <dt>Caffeine content</dt>
        <dd>{caffine}</dd>
        <dt>Age</dt>
        <dd> {age}</dd>
      </dl>
    </section>
  );
}

function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
//` ----------------------------------------------------------------
const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

function Poem() {
  let output = [];

  // Fill the output array
  poem.lines.forEach((line, i) => {
    output.push(<hr key={i + "-separator"} />);
    output.push(<p key={i + "-text"}>{line}</p>);
  });

  // Remove the first <hr />
  output.shift();

  return <article>{output}</article>;
}
//----------------------------------------------------------------
let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}
//----------------------------------------------------------------
function Cup2({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}
function TeaGathering() {
  // try to take this varaible outsdie see the effect
  let cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup2 key={i} guest={i} />);
  }
  return cups;
}

//----------------------------------------------------------------

const DescribeUi = () => {
  return (
    <section>
      <Gallery />
      <hr></hr>
      <RenderArray />
      <hr></hr>
      <TodoList />
      <hr></hr>
      <ProfileTwo />
      <hr></hr>
      <Clock />
      <hr></hr>
      <PackingList />
      <hr></hr>
      <DrinkList />
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>
      <br></br>
      <br></br>
      <Poem />
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <TeaSet />
      <hr></hr>

      <TeaGathering />
      {/* <TeaGathering /> */}
      <hr></hr>
    </section>
  );
};

export default DescribeUi;
