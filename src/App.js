import React from "react";
import PropTypes from "prop-types";

const App = () => {
  const profiles = [
    { name: "aaaa", age: 10 },
    { name: "hanako", age: 5 },
    { name: "noName", age: 1 },
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};

export default App;
