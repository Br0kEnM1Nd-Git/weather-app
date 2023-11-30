import styled from 'styled-components';

const SearchFormStyled = styled.form`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

const CityInput = styled.input`
  width: 150px;
  height: auto;
  padding: 5px 14px;
  border-radius: 30px;
  border: 1px solid black;
  &:focus-visible {
    outline: 0;
  }
`;

const SearchButton = styled.button`
  cursor: pointer;
  padding: 5px 14px;
  border-radius: 30px;
  border: 1px solid black;
  &:hover {
    background-color: rgba(0, 155, 0, 0.5);
  }
`;

export { CityInput, SearchButton, SearchFormStyled };
