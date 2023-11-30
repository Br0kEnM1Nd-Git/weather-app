// const paginate = weatherList => {
//   const batches = [];
//   for (let i = 0; i < 5; i++) {
//     batches.push(weatherList.splice(0, 8));
//   }
//   return batches;
// };

const paginate = weatherList => {
  const batches = [];
  for (let i = 0; i < 5; i++) {
    const currDate = weatherList[0].date.split(' ')[0];
    const filteredWeather = weatherList.filter(el => {
      return el.date.split(' ')[0] === currDate;
    });
    batches.push(filteredWeather);
    const length = filteredWeather.length;
    weatherList.splice(0, length);
  }
  return batches;
};

export default paginate;
