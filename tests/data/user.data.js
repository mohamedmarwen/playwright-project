module.exports = {
  validUser: {
    email: process.env.USER_EMAIL,
    password: process.env.USER_PASSWORD,
  },
  invalidUser: {
    email: 'wrong@example.com',
    password: 'badpassword',
  },
};
