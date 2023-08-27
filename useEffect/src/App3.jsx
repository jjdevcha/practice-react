import React, { useState, useEffect } from "react";

const App3 = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  //   const [content, setContent] = useState("posts");
  //   const [items, setItems] = useState([]);

  //   useEffect(() => {
  //     fetch(`https://jsonplaceholder.typicode.com/${content}`)
  //       .then((response) => response.json())
  //       .then((json) => setItems(json));
  //   }, [content]);

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <>
      {/* <div>
        <button onClick={() => setContent("posts")}>Posts</button>
        <button onClick={() => setContent("users")}>Users</button>
        <button onClick={() => setContent("comments")}>Comments</button>
      </div>
      <h1>{content}</h1>
      <div>
        {items.map((item) => (
          <p>{JSON.stringify(item)}</p>
        ))}
      </div> */}

      <div>{windowWidth}</div>
    </>
  );
};

export default App3;
