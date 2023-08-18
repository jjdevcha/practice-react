import React, { useState, useEffect } from "react";

export default function App() {
  // const [resourceType, setResourceType] = useState("posts");
  // const [items, setItems] = useState([]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then((response) => response.json())
  //     .then((json) => setItems(json));
  // }, [resourceType]);

  // the code line inside the useEffect will only process when the condition gets changed
  // if you put [] in the condition, it will only process when the page in on mount
  // return code inside useEffect helps cleaning the prev code before it runs the cur code

  return (
    <div>{windowWidth}</div>
    //   <>
    //     <div>
    //       <button onClick={() => setResourceType("posts")}>Posts</button>
    //       <button onClick={() => setResourceType("users")}>Users</button>
    //       <button onClick={() => setResourceType("comments")}>Comments</button>
    //     </div>
    //     <h1>{resourceType}</h1>

    //     {items.map((item) => {
    //       return <pre>{JSON.stringify(item)}</pre>;
    //     })}
    //   </>
  );
}
