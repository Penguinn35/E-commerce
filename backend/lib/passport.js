import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/user.model.js"; 

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          user = await User.create({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id
            // password is not required for Google users
          });
        } else if (!user.googleId) {
            // existing user signed up with email+password, link with google
            user.googleId = profile.id;
            await user.save();
        }

        return done(null, user);    // user already exists, log them in
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

export default passport;