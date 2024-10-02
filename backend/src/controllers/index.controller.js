/**
 * @route   GET /
 * @access  public
 * @desc    Home page
 */
const getHome = (req, res) => {
  res.status(200).send(`<h1>Welcome to Server. This is Home Page</h1>`);
};
/**
 * @route   GET /health
 * @access  public
 * @desc    Health page
 */
const getHealth = (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Server is running",
  });
};

export { getHealth, getHome };
