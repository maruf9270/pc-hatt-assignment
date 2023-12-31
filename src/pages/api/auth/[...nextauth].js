import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import connectToDB from "../../../../backend/Database/databaseConnect";
import { User } from "../../../../backend/model/userModel";
export const authOptions = {
  session: {
    strategy: "jwt",
  },
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: "Iv1.edd4bd8a96970cd9",
      clientSecret: "6023590f0c6a36864e762fc0a6cd67dc683aa272",
    }),
    CredentialsProvider({
      async authorize(credentials, req) {
        connectToDB();
        const { email, password } = credentials;
        const user = await User.findOne({ email: email, password: password });

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  pages: {
    signIn: `https://pc-hatt-assignment.vercel.app/login`,
  },
  secret: process.env.NEXTAUTH_SECRET,
};
export default NextAuth(authOptions);
