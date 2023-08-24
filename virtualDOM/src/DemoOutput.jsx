import React from "react";

const DemoOutput = (props) => {
  console.log("DemoOutput Running");
  return <p>{props.show ? "This is new!" : ""}</p>;
};

export default React.memo(DemoOutput);

// React.memo checks if props have any change
// if not it doesn't re-execute/re-examin the child component

// it still has a cost
// it has to compare previous prop and current prop
// so it doesn't mean it's def better in performance wise

// it will be worthy when the app is huge and there is chains of components
// since you can prevent a huge unnecessary re-evaluation of the components

// you don't wanna wrap every components with React.memo
// you should pick some key components on the branches
