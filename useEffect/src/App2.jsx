import React, { useState, useEffect } from "react";

export default function App2() {
  // const [display, setDisplay] = useState("posts");
  // const [items, setItems] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${display}`)
  //     .then((response) => response.json())
  //     .then((json) => setItems(json));
  // }, [display]);

  function handleResize() {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  return (
    <>
      <h1>{screenWidth}</h1>
      {/* <div>
        <button onClick={() => setDisplay("posts")}>Posts</button>
        <button onClick={() => setDisplay("users")}>Users</button>
        <button onClick={() => setDisplay("comments")}>Comments</button>
      </div>
      <h1>{display}</h1>
      {items.map((item) => {
        return <p>{JSON.stringify(item)}</p>;
      })} */}
    </>
  );
}
