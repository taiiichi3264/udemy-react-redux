function App() {
  const greeting = "hi!!!!";
  const dom = <h1 className="foo">{greeting}</h1>;
  return (
    <>
      {dom}
      <label htmlFor="bar">bar</label>
      <input
        type="text"
        onChange={() => {
          console.log("clicked");
        }}
      />
    </>
  );
}

export default App;
