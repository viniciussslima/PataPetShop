module.exports = (datetime) => {
  return `${datetime.getDate()}/${
    datetime.getMonth() + 1
  }/${datetime.getFullYear()}`;
};
