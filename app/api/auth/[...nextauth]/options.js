import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "../../../lib/models";
import bcrypt from "bcrypt";
import { connectToDB } from "../../../lib/utils";

export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email:",
          type: "text",
          placeholder: "your-email",
        },
        password: {
          label: "password:",
          type: "password",
          placeholder: "your-password",
        },
      },
      async authorize(credentials) {
        try {
          console.log("In Credentials");
          connectToDB();
          const foundUser = await User.findOne({ email: credentials.email })
            .lean()
            .exec();
          if (foundUser) {
            console.log("User Exists");
            const match = await bcrypt.compare(
              credentials.password,
              foundUser.password
            );

            if (match) {
              console.log("Good Pass");
              delete foundUser.password;
              if (foundUser.isAdmin) {
                foundUser["role"] = "admin";
              } else {
                foundUser["role"] = "user";
              }

              return foundUser;
            }
          }
        } catch (error) {
          console.log(error);
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
        session.user.username = token.username;
      }
      return session;
    },
  },
};
