const mysql = require("../../db");

const SQL = {
  createScale: "INSERT INTO scale SET ?",
  getScaleByDateAndTime:
    "SELECT * FROM scale WHERE employee = ? AND (startTime BETWEEN ? AND ? OR endTime BETWEEN ? AND ?)",
  getScalesByEmployee: "SELECT * FROM scale WHERE employee = ?",
};

exports.createScale = async (scale) => {
  await mysql.query(SQL.createScale, scale);
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

exports.getScalesByEmployee = async (employee) => {
  const [response] = await mysql.query(SQL.getScalesByEmployee, employee);
  return response;
};
