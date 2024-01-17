const noUserName = { username: "", password: "password" };
const noPassword = { username: "username", password: "" };
const invalidUser = { username: "invalid", password: "password" };
const invalidPassword = { username: "username", password: "invalid" };
const validLogin = { username: "username", password: "terrível" };
const validUser = {
  id: 10,
  username: "username",
  vocation: "string",
  level: 10,
  password: "$2a$10$eJB8Sk1jIfEVd.8cD2wf0uF7VP89mukxCUTjH1p4oLlPOPwiZYQB6",
};

export default {
  noUserName,
  noPassword,
  invalidUser,
  invalidPassword,
  validUser,
  validLogin,
};
