import styled from "styled-components";
import {
  motion,
  // useMotionValue,
  // useTransform,
  // useViewportScroll,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(135deg, #e09, #d0e);
`;

const Box = styled(motion.div)`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* display: grid;
  grid-template-columns: repeat(2, 1fr); */
  background-color: rgba(255, 255, 255, 1);
  /* position: absolute; */
  top: 100px;
  border-radius: 40px;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
  width: 50vw;
  gap: 10px;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const Circle = styled(motion.div)`
//   width: 50px;
//   height: 50px;
//   /* border-radius: 25px; */
//   background: rgba(10, 10, 200, 1);
// `;

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

// const Svg = styled(motion.svg)`
//   width: 300px;
//   height: 300px;
//   path {
//     stroke: black;
//     stroke-width: 2;
//   }
// `;

// const svgVars = {
//   start: { pathLength: 0, fill: "rgba(255,255,255,0)" },
//   end: {
//     fill: "rgba(255,255,255,1)",
//     pathLength: 1,
//   },
// };

// const boxVars = {
//   invisible: (back: boolean) => ({
//     x: back ? -500 : 500,
//     opacity: 0,
//     scale: 0,
//   }),
//   visible: {
//     x: 0,
//     opacity: 1,
//     scale: 1,
//     transition: {
//       duration: 1,
//     },
//   },
//   exit: (back: boolean) => ({
//     x: back ? 500 : -500,
//     opacity: 0,
//     scale: 0,
//     transition: {
//       duration: 1,
//     },
//   }),
// };

function App() {
  // const biggerBoxRef = useRef<HTMLDivElement>(null);
  // const x = useMotionValue(0);
  // const scaleTransform = useTransform(x, [-400, 0, 400], [2, 1, 0.1]);
  // const rotateTransform = useTransform(x, [-400, 400], [-360, 360]);
  // const colorTransform = useTransform(
  //   x,
  //   [-400, 0, 400],
  //   [
  //     "linear-gradient(135deg, #e09, #d0e)",
  //     "linear-gradient(135deg, #595bb5, #8f4dd5)",
  //     "linear-gradient(135deg, #2d8a8d, #5889ba)",
  //   ]
  // );
  // const { scrollYProgress } = useViewportScroll();
  // const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  // useEffect(() => {
  //   scrollY.onChange(() => {
  //     console.log(scrollY.get(), scrollYProgress.get());
  //   });
  // }, [scrollYProgress]);

  // useEffect(() => {
  //   scaleTransform.onChange(() => console.log(scaleTransform.get()));
  // }, [x]);
  // const [showing, setShowing] = useState(false);
  // const toggleShowing = () => setShowing((prev) => !prev);
  // const [visible, setVisible] = useState(1);
  // const [back, setBack] = useState(false);
  // const nextPlease = () => {
  //   setBack(false);
  //   setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  // };
  // const prevPlease = () => {
  //   setBack(true);
  //   setVisible((prev) => (prev      === 1 ? 1 : prev - 1));
  // };
  const [id, setId] = useState<string | null>(null);
  const [clicked, setClicked] = useState(false);
  const toggleClick = () => setClicked((prev) => !prev);
  return (
    <Wrapper onClick={toggleClick}>
      {/* <Box
        style={{ x, rotateZ: rotateTransform, scale }}
        drag="x"
        dragSnapToOrigin
      /> */}
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
      {/* <Svg
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <motion.path
          variants={svgVars}
          initial="start"
          animate="end"
          transition={{
            default: { duration: 3 },
            fill: { duration: 1, delay: 1 },
          }}
          d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z"
        ></motion.path>
      </Svg> */}
      {/* <button onClick={toggleShowing}>Click</button> */}
      {/* <AnimatePresence>
        {showing ? (
          <Box
            variants={boxVars}
            initial="initial"
            animate="visible"
            exit="leaving"
          />
        ) : null}
      </AnimatePresence> */}
      {/* <AnimatePresence mode="wait" custom={back}>
        <Box
          custom={back}
          variants={boxVars}
          initial="invisible"
          animate="visible"
          exit="exit"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={prevPlease}>prev</button>
      <button onClick={nextPlease}>next</button> */}
      {/* <Box
        style={{
          justifyContent: clicked ? "flex-start" : "center",
          alignItems: clicked ? "flex-start" : "center",
        }}
      >
        <Circle layout />
      </Box> */}
      {/* <Box>
        {clicked ? null : (
          <Circle layoutId="circle" style={{ borderRadius: 50 }} />
        )}
      </Box>
      <Box>
        {clicked ? (
          <Circle layoutId="circle" style={{ borderRadius: 0, scale: 2 }} />
        ) : null}
      </Box> */}
      <Grid>
        {["1", "2", "3", "4"].map((n) => (
          <Box onClick={() => setId(n)} key={n} layoutId={n} />
        ))}
      </Grid>
      <AnimatePresence>
        {clicked ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Box layoutId={id} style={{ width: 400, height: 200 }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
