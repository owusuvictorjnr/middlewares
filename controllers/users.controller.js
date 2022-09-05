const getUsers = (req, res) => {
  res.status(200).send("All Users");
};

const getUser = (req, res) => {
  res.status(200).send("A User");
};

const createUser = (req, res) => {
  res.status(200).send("Create a User");
};

const updateUser = (req, res) => {
  res.status(200).send("Update a User");
};

const deleteUser = (req, res) => {
  res.status(200).send("Delete a User");
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
