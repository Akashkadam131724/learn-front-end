function MyButton() {
  return <button>{`I'm a button`}</button>;
}
export default function MyCustomButton() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

export { MyButton };
