import api from 'api/api';
import { useState } from 'react';
import { CityInput, SearchButton, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    const value = e.target.value;
    setQuery(value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const weather = await api.getWeather(query);
    onSubmit(weather);
    setQuery('');
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <CityInput
        name="query"
        type="text"
        onChange={handleChange}
        value={query}
      />
      <SearchButton type="submit">Click</SearchButton>
    </SearchFormStyled>
  );
};
