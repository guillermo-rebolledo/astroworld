import Head from "next/head";
import PropTypes from "prop-types";
import Header from "../components/Header";
import MainCard from "../components/MainCard";
import { Card, CardAuthor, CardList } from "../components/CardStack";
import Stars from "../components/Stars";
import ISSPrediction from "../components/ISSPrediction";

export default function Home({ astroCount, astroData }) {
  const suffix = astroCount === 1 ? "person" : "people";

  return (
    <>
      <Head>
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
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://astroworld.vercel.app/" />
        <meta property="twitter:title" content="🚀 Astroworld" />
        <meta
          property="twitter:description"
          content="Fun facts about space and the ISS from NASA."
        />
        <meta
          property="twitter:image"
          content="https://astroworld.vercel.app/astroworld.png"
        />
      </Head>
      <Header>
        <span role="img" aria-label="star emoji">
          🌟
        </span>
        Astroworld
        <span role="img" aria-label="star emoji">
          🌟
        </span>
      </Header>
      <Stars />
      <MainCard>
        <span aria-label="astronaut emojis" role="img">
          👩‍🚀👨‍🚀🚀
        </span>
        <br />
        There is currently {`${astroCount} ${suffix}`} in space right now.
      </MainCard>

      <CardList>
        {astroData.map((astronaut, index) => (
          <Card key={`astronaut-${index}`}>
            <header>
              <h2>
                {astronaut.name} via {astronaut.craft}
              </h2>
            </header>

            <CardAuthor>
              <span role="img" aria-label="rocket emoji">
                🚀
              </span>
            </CardAuthor>
          </Card>
        ))}
      </CardList>
      <Stars />
      <ISSPrediction />
      <Stars />
    </>
  );
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch("http://api.open-notify.org/astros.json");
  const responseJson = await res.json();

  return {
    astroCount: responseJson.number,
    astroData: responseJson.people,
  };
};

Home.propTypes = {
  astroCount: PropTypes.number.isRequired,
  astroData: PropTypes.array.isRequired,
};
