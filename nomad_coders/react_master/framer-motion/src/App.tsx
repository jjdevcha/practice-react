import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useEffect, useRef } from "react";

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

// const BiggerBox = styled.div`
//   width: 600px;
//   height: 600px;
//   background-color: rgba(255, 255, 255, 0.2);
//   border-radius: 40px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   /* overflow: hidden; */
// `;

// const myVars = {
//   start: { scale: 0 },
//   end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 0.5 } },
// };

// const Circle = styled(motion.div)`
//   background-color: white;
//   height: 70px;
//   width: 70px;
//   place-self: center;
//   border-radius: 35px;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;

// const boxVariants = {
//   start: {
//     opacity: 0,
//     scale: 0.5,
//   },
//   end: {
//     scale: 1,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       duration: 0.5,
//       bounce: 0.5,
//       delayChildren: 0.1,
//       staggerChildren: 0.1,
//     },
//   },
// };

// const circleVariants = {
//   start: {
//     opacity: 0,
//     y: 10,
//   },
//   end: {
//     opacity: 1,
//     y: 0,
//   },
// };

// const boxVars = {
//   hover: { scale: 1.5, rotateZ: 90 },
//   click: { scale: 1, borderRadius: "100px" },
//   drag: { backgroundColor: "rgba(106, 140, 255, 1)" },
// };

function App() {
  // const biggerBoxRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const scaleTransform = useTransform(x, [-400, 0, 400], [2, 1, 0.1]);
  const rotateTransform = useTransform(x, [-400, 400], [-360, 360]);
  const colorTransform = useTransform(
    x,
    [-400, 0, 400],
    [
      "linear-gradient(135deg, #e09, #d0e)",
      "linear-gradient(135deg, #595bb5, #8f4dd5)",
      "linear-gradient(135deg, #2d8a8d, #5889ba)",
    ]
  );
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  // useEffect(() => {
  //   scrollY.onChange(() => {
  //     console.log(scrollY.get(), scrollYProgress.get());
  //   });
  // }, [scrollYProgress]);

  // useEffect(() => {
  //   scaleTransform.onChange(() => console.log(scaleTransform.get()));
  // }, [x]);
  return (
    <Wrapper style={{ background: colorTransform }}>
      <Box
        style={{ x, rotateZ: rotateTransform, scale }}
        drag="x"
        dragSnapToOrigin
      />
      {/* <Box variants={myVars} initial="start" animate="end" /> */}
      {/* <BiggerBox ref={biggerBoxRef}> */}
      {/* <Box
          drag
          dragSnapToOrigin
          dragElastic={0.5}
          dragConstraints={biggerBoxRef}
          variants={boxVars}
          whileHover="hover"
          whileTap="click"
          whileDrag="drag"
        /> */}
      {/* <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} /> */}
      {/* </BiggerBox> */}
    </Wrapper>
  );
}

export default App;
