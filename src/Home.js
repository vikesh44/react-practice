import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", auther: "Poonam", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", auther: "Niya", id: 2 },
    { title: "Web dev top tips", body: "lorem ipsum...", auther: "Poonam", id: 3 },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
    </div>
  );

  // //State example
  // const [name, setName] = useState("Niya");
  // const [age, setAge] = useState(5);

  // const handleClick = (e) => {
  //   setName("Poonam");
  //   setAge(35);
  // };

  // const handleClick2 = (name) => {
  //   console.log("Hello, " + name);
  // };

  // return (
  //   <div className="home">
  //     <h2>I am from Home page</h2>
  //     <button onClick={handleClick}>Click Me</button>
  //     <p>{name} is {age} year old.</p>
  //     <button onClick={() => handleClick2("Vikesh")}>Click Me 2</button>
  //   </div>
  // );
};

export default Home;
