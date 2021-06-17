import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import mongoose from "mongoose";

const User = mongoose.model("User");
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      //   console.log("accessToken1", accessToken);
      //   console.log("refreshToken1", refreshToken);

      //   console.log("done1", done);
      // return done("err", "ok");
      // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //   return done(err, user);

      const existingUser = await User.findOne({ googleId: profile.id });
      console.log(profile);
      if (existingUser) {
        done(null, existingUser);
        // login
      } else if (existingUser === null) {
        const user = new User({
          googleId: profile.id,
          userName: profile.displayName,
          email: profile._json.email,
        });
        await user.save();
        done(null, user);
      } else {
        done("error accorded when trying to find the user credentials", user);
      }

      // });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});
