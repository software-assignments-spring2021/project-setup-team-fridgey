const router = require("express-promise-router")();
const UsersController = require("./controllers/users");
const { validateBody, schemas } = require("./helpers/routeHelpers");
const passport = require("passport");
const passportConf = require("./passport");
const passportSignIn = passport.authenticate("local", { session: false })
const passportJWT = passport.authenticate("jwt", { session: false })

router.route("/signup")
  .post(validateBody(schemas.authSchema), UsersController.signUp);

router.route("/signin")
  .post(validateBody(schemas.authSchema), passportSignIn, UsersController.signIn);

router.route("/secret")
  .get(passportJWT, UsersController.secret);

router.route("/getUser")
  .get(UsersController.getUser);

module.exports = router;