const { getScaleByDateAndTime, createScale } = require("../dao");
const { formatDate, log } = require("../../../helpers");

module.exports = async (req, res) => {
  const { employee, date, startHour, endHour } = req.body;
  try {
    const newDate = formatDate(date);
    const startTime = formatDate(date, startHour);
    const endTime = formatDate(date, endHour);
    let scale = await getScaleByDateAndTime(employee, startTime, endTime);
    if (!scale) {
      await createScale({ employee, date: newDate, startTime, endTime });
      return res.status(200).send();
    }
    return res.status(409).send({
      message: "Esse horario desse funcionario está ocupado",
    });
  } catch (err) {
    res.status(500).send();
    return log.write(err.toString() + "\n");
  }
};
