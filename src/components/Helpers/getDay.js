const getDay = i => {
  switch (i) {
    case 0:
      return 'Сьогодні';
    case 1:
      return 'Завтра';
    case 2:
      return 'Післязавтра';
    case 3:
      return 'Через три дні';
    case 4:
      return 'Через чотири дні';
    default:
      break;
  }
};

export default getDay;
