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
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        {/* Primary Meta Tags */}
        <title>🚀 Astroworld</title>
        <meta name="title" content="🚀 Astroworld" />
        <meta
          name="description"
          content="Fun facts about space and the ISS from NASA."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://astroworld.vercel.app/" />
        <meta property="og:title" content="🚀 Astroworld" />
        <meta
          property="og:description"
          content="Fun facts about space and the ISS from NASA."
        />
        <meta
          property="og:image"
          content="https://astroworld.vercel.app/astroworld.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@memorebolledo" />
        <meta name="twitter:creator" content="@memorebolledo" />
        <meta
          name="twitter:title"
          content="Fun facts about space and the ISS from NASA."
        />
        <meta
          name="twitter:description"
          content="Fun facts about space and the ISS from NASA."
        />
        <meta
          name="twitter:image"
          content="https://astroworld.vercel.app/astroworld.png"
        />
        <title>Astroworld</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>"
        ></link>
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
