// const login = aync (req,res) => {
//     res.send('Fake login/resgister/signup route')
// }
const login = async (req, res) => {
  res.send('Fake logn/register/signup route ');
};

const dashboard = async (req, res) => {
  const luckyNum = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: 'Hello Jojo,',
    secret: ` Your secret lucky number is ${luckyNum}`,
  });
};

module.exports = { login, dashboard };
