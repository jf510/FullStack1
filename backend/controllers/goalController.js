// @desc Get goals
// @route Get/api/goals
// @access Private

const getGoals = (req, res) => {
  res.status(200).json({ messege: "Get Goals!" });
};

// @desc Set goals
// @route Post/api/goals
// @access Private

const setGoal = (req, res) => {
  res.status(200).json({ messege: "Set Goal!" });
};

// @desc Update goals
// @route put/api/goals/:id
// @access Private

const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update Goal ${req.params.id}` });
};

// @desc Delete goal
// @route Delete/api/goals/:id
// @access Private

const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete Goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
