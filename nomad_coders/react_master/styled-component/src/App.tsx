// import { useState } from "react";
// import styled from "styled-components";

// const Wrapper = styled.div`
//   background-color: ${(props) => props.theme.bgColor};
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Btn = styled.button`
//   background-color: ${(props) => props.theme.btnColor};
// `;

// function App() {
//   const [value, setValue] = useState("");
//   const onChange = (e: React.FormEvent<HTMLInputElement>) => {
//     // React uses currentTarget instead of target?
//     const {
//       currentTarget: { value },
//     } = e;
//     setValue(value);
//   };

//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("hello", value);
//     setValue("");
//   };
//   return (
//     <Wrapper>
//       <form onSubmit={onSubmit}>
//         <input
//           value={value}
//           type="text"
//           placeholder="username"
//           onChange={onChange}
//         />
//         <Btn>Log in</Btn>
//       </form>
//     </Wrapper>
//   );
// }

// export default App;

import Router from "./Router";
import { createGlobalStyle } from "styled-components";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400&display=swap');

  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
  font-family: 'Source Sans 3', sans-serif;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}
`;

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark((current) => !current);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router isDark={isDark} toggleTheme={toggleTheme} />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}

export default App;

// isDark : App ->  Router -> Coin -> Chart  (Too much drilling)
// Need global state
