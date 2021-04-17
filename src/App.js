import React from "react";

const App = () => {
  return (
    <div>
      Hi!
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
};

const Cat = () => {
  return <div>meow</div>;
};

export default App;
