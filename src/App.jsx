import { AppWrapper } from 'components/Helpers/Components.styled';
import { InfoSection } from 'components/InfoSection/InfoSection';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useState } from 'react';

export const App = () => {
  const [weatherInfo, setWeatherInfo] = useState([]);

  const handleSubmit = weather => {
    console.log(weather);
    setWeatherInfo(weather);
  };

  return (
    <AppWrapper>
      <SearchForm onSubmit={handleSubmit} />
      <InfoSection weatherInfo={weatherInfo} />
    </AppWrapper>
  );
};
