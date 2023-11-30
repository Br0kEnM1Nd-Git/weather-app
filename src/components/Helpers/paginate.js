const paginate = weatherList => {
  const batches = [];
  for (let i = 0; i < 5; i++) {
    batches.push(weatherList.splice(0, 8));
  }
  return batches;
};

export default paginate;
