const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const LocalStrategy = require("passport-local").Strategy;
const { JWT_SECRET } = require("./configuration");
const UserData = require("./database/userData");

// JSON web token strategy
passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: JWT_SECRET
}, async (payload, done) => {
  try {
    // Find the user specified in token
    const user = await UserData.findById(payload.sub);

    // If user doesn't exist, handle it
    if (!user) {
      return done(null, false);
    }

    // Otherwise, return user
    done(null, user);
  } catch (error) {
    done(error, false);
  }
}));

// Local strategy
passport.use(new LocalStrategy({
  usernameField: "email"
}, async (email, password, done) => {
  try {
    // Find the user given the email
    const user = await UserData.findOne({ email });

    // If not, handle it
    if (!user) {
      return done(null, false);
    }

    // Check if password is correct
    const isMatch = await user.isValidPassword(password);

    // If not, handle it
    if (!isMatch) {
      return done(null, false);
    }

    // Otherwise, return user
    done(null, user);
  } catch (error) {
    done(error, false);
  }
}));