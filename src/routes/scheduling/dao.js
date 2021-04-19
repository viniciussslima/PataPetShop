const mysql = require("../../db");

const SQL = {
  getScaleByDateAndTime:
    "SELECT * FROM scale WHERE employee = ? AND startTime = ? AND endTime = ?",
  getScheduling:
    "SELECT * FROM scheduling WHERE employee = ? AND startTime = ? AND endTime = ?",
  createScheduling: "INSERT INTO scheduling SET ?",
  getSchedulings: "SELECT * FROM scheduling",
};

exports.getScaleByDateAndTime = async (employee, startTime, endTime) => {
  const [[response]] = await mysql.query(SQL.getScaleByDateAndTime, [
    employee,
    startTime,
    endTime,
    startTime,
    endTime,
  ]);

  return response;
};

exports.getScheduling = async (employee, startTime, endTime) => {
  const [[response]] = await mysql.query(SQL.getScheduling, [
    employee,
    startTime,
    endTime,
  ]);

  return response;
};

exports.createScheduling = async (scheduling) => {
  await mysql.query(SQL.createScheduling, scheduling);
};

exports.getSchedulings = async (scheduling) => {
  let [response] = await mysql.query(SQL.getSchedulings, scheduling);
  return response;
};
