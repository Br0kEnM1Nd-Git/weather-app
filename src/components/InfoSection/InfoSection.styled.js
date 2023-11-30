import styled from 'styled-components';

const InfoSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

const WeatherListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const WeatherCard = styled.ul`
  background-color: #f7dc6f;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 30px;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.5);
  padding: 40px 20px;
`;

const WeatherCardItem = styled.li`
  padding: 5px;
  border-radius: 10px;
  &:not(:first-child):hover {
    box-shadow: 0 0 5px black;
    background-color: rgba(0, 155, 0, 0.5);
  }
`;

export { InfoSectionWrapper, WeatherListWrapper, WeatherCard, WeatherCardItem };
