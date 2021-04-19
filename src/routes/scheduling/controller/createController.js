const {
  getScaleByDateAndTime,
  getScheduling,
  createScheduling,
} = require("../dao");
const { formatDate, log } = require("../../../helpers");

module.exports = async (req, res) => {
  const { scale, user } = req.body;
  try {
    const newDate = formatDate(scale.date);
    const startTime = formatDate(scale.date, scale.startHour);
    const endTime = formatDate(scale.date, scale.endHour);
    let existsScale = await getScaleByDateAndTime(
      scale.employee,
      startTime,
      endTime
    );
    if (!existsScale) {
      return res.status(409).send({
        message: "Esse horário não está disponivel para esse funcionario",
      });
    }

    let unavailableScheduling = await getScheduling(
      scale.employee,
      startTime,
      endTime
    );
    if (unavailableScheduling) {
      return res.status(409).send({
        message: "Esse horário já está agendado",
      });
    }

    await createScheduling({
      employee: scale.employee,
      date: newDate,
      startTime,
      endTime,
      client: user,
    });

    res.status(200).send();
  } catch (err) {
    res.status(500).send();
    return log.write(err.toString() + "\n");
  }
};
