const { getScalesByEmployee } = require("../dao");
const { getHour, getDate, log } = require("../../../helpers");

module.exports = async (req, res) => {
  const { employee } = req.params;
  try {
    let scales = await getScalesByEmployee(employee);

    let newScales = [];
    scales.forEach((scale) => {
      newScales.push({
        date: getDate(scale.date),
        startHour: getHour(scale.startTime),
        endHour: getHour(scale.endTime),
      });
    });
    return res.status(200).send(newScales);
  } catch (err) {
    res.status(500).send();
    return log.write(err.toString() + "\n");
  }
};
