const { getSchedulings } = require("../dao");
const { getHour, getDate, log } = require("../../../helpers");

module.exports = async (req, res) => {
  try {
    let schedulings = await getSchedulings();
    let newSchedulings = [];
    schedulings.forEach((scheduling) => {
      newSchedulings.push({
        employee: scheduling.employee,
        client: scheduling.client,
        date: getDate(scheduling.date),
        startHour: getHour(scheduling.startTime),
        endHour: getHour(scheduling.endTime),
      });
    });
    return res.status(200).send(newSchedulings);
  } catch (err) {
    res.status(500).send();
    return log.write(err.toString() + "\n");
  }
};
