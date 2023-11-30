import api from 'api/api';
import { AppWrapper } from 'components/Helpers/Components.styled';
import { InfoSection } from 'components/InfoSection/InfoSection';
import { SearchForm } from 'components/SearchForm/SearchForm';
// import { useState } from 'react';

export const App = () => {
  // const [weatherInfo, setWeatherInfo] = useState([]);

  return (
    <AppWrapper>
      <SearchForm />
      <InfoSection />
    </AppWrapper>
  );
};
