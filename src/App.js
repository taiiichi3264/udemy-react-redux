import React from "react";

const App = () => {
  const profiles = [
    { name: "taro", age: 10 },
    { name: "hanako", age: 5 },
    { name: "noName" },
  ];
  return (
    <div>
      {profiles.map((profile, index) => {
        const { name, age } = profile;
        return <User name={name} age={age} key={index} />;
      })}
    </div>
  );
};

const User = (props) => {
  const { name, age } = props;
  return (
    <div>
      Hi!, Im {name} and {age} years old!
    </div>
  );
};

User.defaultProps = { age: 1 };

export default App;
