const getDay = i => {
  switch (i) {
    case 0:
      return 'Today';
    case 1:
      return 'Tomorrow';
    case 2:
      return 'After tomorrow';
    case 3:
      return 'In 3 days';
    case 4:
      return 'In 4 days';
    default:
      break;
  }
};

export default getDay;
