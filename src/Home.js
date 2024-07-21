import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Niya");

  const handleClick = (e) => {
    setName("Poonam");
    console.log("Hello, " + name);
  };

  const handleClick2 = (name) => {
    console.log("Hello, " + name);
  };

  return (
    <div className="home">
      <h2>I am from Home page</h2>
      <button onClick={handleClick}>Click Me</button>
      <p>{name}</p>
      <button onClick={() => handleClick2("Vikesh")}>Click Me 2</button>
    </div>
  );
};

export default Home;
