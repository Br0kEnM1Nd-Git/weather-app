import { AppWrapper } from 'components/Helpers/Components.styled';
import paginate from 'components/Helpers/paginate';
import { InfoSection } from 'components/InfoSection/InfoSection';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useState } from 'react';

export const App = () => {
  const [weatherInfo, setWeatherInfo] = useState(null);

  const handleSubmit = weather => {
    weather.weatherList = paginate(weather.weatherList);
    setWeatherInfo(weather);
  };

  return (
    <AppWrapper>
      <SearchForm onSubmit={handleSubmit} />
      {weatherInfo && <InfoSection weatherInfo={weatherInfo} />}
    </AppWrapper>
  );
};
