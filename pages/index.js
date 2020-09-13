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
