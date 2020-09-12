import styled from "styled-components";
import PropTypes from "prop-types";
import MainCard from "../components/MainCard";
import SmallCard from "../components/SmallCard";

export default function Home({ astroCount, astroData }) {
  const suffix = astroCount === 1 ? "person" : "people";

  return (
    <>
      <MainCard>
        <span aria-label="astronaut emojis" role="img">
          👩‍🚀👨‍🚀🚀
        </span>
        <br />
        There is currently {`${astroCount} ${suffix}`} in space right now.
      </MainCard>

      {astroData.map((astronaut, index) => (
        <SmallCard key={`astronaut-${index}`}>
          <span aria-label="rocket emoji" role="img">
            🚀&nbsp;
          </span>
          {astronaut.name} via {astronaut.craft}
        </SmallCard>
      ))}
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
