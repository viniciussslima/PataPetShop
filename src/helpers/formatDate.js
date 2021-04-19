module.exports = (date, hour) => {
  let [day, month, year] = date.split("/");
  if (hour) {
    return `${year}-${month}-${day} ${hour}`;
  } else {
    return `${year}-${month}-${day}`;
  }
};
