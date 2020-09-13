import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    background-color: #121212;
  }

  #__next {
    overflow: hidden;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Astroworld</title>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
        </style>
      </Helmet>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
