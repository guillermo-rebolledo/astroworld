import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useSWR from "swr";
import MainCard from "./MainCard";
import SmallCard from "./SmallCard";
import { sm, md, lg, xl } from "../constants/breakpoints";

const Description = styled.section`
  text-align: center;
  font-family: "Space Mono", monospace;
  font-weight: bold;
  font-size: 12px;
  color: white;

  @media (${sm}) {
    /* padding: 32px; */
    font-size: 14px;
  }

  @media (${md}) {
    /* padding: 64px; */
    font-size: 18px;
  }

  @media (${lg}) {
    /* padding: 128px; */
    font-size: 24px;
  }

  @media (${xl}) {
    /* padding: 256px; */
    font-size: 24px;
  }
`;

export default function ISSPrediction() {
  const [latLng, setLatLng] = useState({
    latitude: null,
    longitude: null,
  });
  const [notAvailable, setNotAvailable] = useState(false);
  const fetcher = (url) => fetch(url).then((r) => r.json());

  const { data: predictions, error, isValidating } = useSWR(
    latLng.latitude && latLng.longitude
      ? `/api/predictions?lat=${latLng.latitude}&lon=${latLng.longitude}`
      : null,
    fetcher
  );

  useEffect(() => {
    if (typeof window !== undefined) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;

            setLatLng({
              latitude,
              longitude,
            });
          },
          (error) => {
            console.error(error);
            setNotAvailable(true);
          }
        );
      } else {
        setNotAvailable(true);
      }
    }
  }, []);

  if (error || notAvailable) {
    return (
      <MainCard>
        <span aria-label="sad emoji" role="img">
          😔
        </span>
        <br />
        We could not get the predictions for the ISS. Check your permissions for
        GeoLocation!
      </MainCard>
    );
  }

  if (isValidating || !predictions) {
    return (
      <MainCard>
        <span aria-label="astronaut emojis" role="img">
          👩‍🚀
        </span>
        <br />
        Getting data...
      </MainCard>
    );
  }

  return (
    <>
      <Description>
        The ISS will be overhead (10° in elevation) from your location the
        following dates:
      </Description>
      {predictions.data.map((prediction, index) => {
        const { duration, risetime } = prediction;
        const [date, time] = risetime.split(" ");

        return (
          <SmallCard key={`prediction=${index}`}>
            <span aria-label="rocket emoji" role="img">
              🛰️
            </span>
            <div>For {duration} seconds.</div>
            <div>
              <span aria-label="date emojis" role="img">
                📅⏰&nbsp;
              </span>
              On {date} at {time}
            </div>
          </SmallCard>
        );
      })}
    </>
  );
}
