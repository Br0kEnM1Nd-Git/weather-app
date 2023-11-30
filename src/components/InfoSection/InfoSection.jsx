import getDay from 'components/Helpers/getDay';
import { nanoid } from 'nanoid';
import {
  InfoSectionWrapper,
  WeatherCard,
  WeatherCardItem,
  WeatherListWrapper,
} from './InfoSection.styled';

export const InfoSection = ({ weatherInfo }) => {
  const { city, country, weatherList } = weatherInfo;

  return (
    <InfoSectionWrapper>
      <h2>{`${city}/${country} `}</h2>
      <WeatherListWrapper>
        {weatherList.map((batch, i) => {
          return (
            <WeatherCard key={nanoid()}>
              <WeatherCardItem>
                <p>{getDay(i)}</p>
              </WeatherCardItem>
              {batch.map(el => {
                const {
                  date,
                  feelsLike,
                  humidity,
                  temp,
                  weatherDesc,
                  windSpeed,
                } = el;
                return (
                  <WeatherCardItem key={nanoid()}>
                    <p>{date}</p>
                    <p>{`Температура: ${temp}°C. Відчувається: ${feelsLike}°C. Вологість: ${humidity}%.`}</p>
                    <p>{`Погода: ${weatherDesc}. Швидкість вітру: ${windSpeed} км/г`}</p>
                  </WeatherCardItem>
                );
              })}
            </WeatherCard>
          );
        })}
      </WeatherListWrapper>
    </InfoSectionWrapper>
  );
};
