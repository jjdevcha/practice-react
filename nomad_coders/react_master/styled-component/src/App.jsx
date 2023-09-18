import styled, { keyframes } from "styled-components";

function App() {
  const Mother = styled.div`
    display: flex;
    background-color: ${(props) => props.theme.backgroundColor};
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  `;

  const Title = styled.h1`
    color: ${(props) => props.theme.textColor};
  `;

  // const Box = styled.div`
  //   width: 100px;
  //   height: 100px;
  //   background-color: ${(props) => props.bgColor};
  //   border-radius: ${(props) => props.borderRad};
  // `;

  // // const Circle = styled(Box)` // extend from the box
  // //   border-radius: 50px;
  // // `;

  // const Hello = styled.h1`
  //   color: white;
  // `;

  // const Btn = styled.button`
  //   color: white;
  //   background-color: tomato;
  //   border: 0;
  //   border-radius: 15px;
  // `;

  // const Input = styled.input.attrs({ required: true })`
  //   background-color: tomato;
  // `;
  const boxAnimation = keyframes`
    0% {
      transform : rotate(0deg);
      border-radius: 0px;
    } 
    50% {
      border-radius: 100px;
    }
    100% {
      transform: rotate(360deg);
      border-radius: 0px;
    }
  `;

  const Emoji = styled.span`
    font-size: 36px;
  `;

  const BoxA = styled.div`
    height: 200px;
    width: 200px;
    background-color: tomato;
    animation: ${boxAnimation} 4s linear infinite;
    display: flex;
    justify-content: center;
    align-items: center;
    ${Emoji} {
      // You can customize the tag of pseudo selectors in this way
      &:hover {
        font-size: 50px;
      }
    }
  `;

  return (
    <Mother>
      <Title>This is title</Title>
      {/* <Box bgColor="teal" borderRad="0">
          <Hello>Hello</Hello>
        </Box>
        <Box bgColor="tomato" borderRad="50px" /> */}

      {/* <Btn>Log in</Btn>
        <Btn as="a" href="/">
          a tag
        </Btn> */}

      {/* <Input />
        <Input />
        <Input />
        <Input />
        <Input /> */}

      {/* <BoxA>
          <Emoji as="p">😊</Emoji>
        </BoxA> */}
      {/* this emoji doesn't get pseudo style */}
      {/* <Emoji>🔥</Emoji> */}
    </Mother>
  );
}

export default App;
