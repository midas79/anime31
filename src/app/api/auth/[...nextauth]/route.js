import NextAuth from "next-auth";
import githubAuth from "next-auth/providers/github";

// Menentukan clientId dan clientSecret sesuai environment
const clientId =
  process.env.NODE_ENV === "production"
    ? process.env.GITHUB_CLIENT_Jo
    : process.env.GITHUB_CLIENT_Diyon;

const clientSecret =
  process.env.NODE_ENV === "production"
    ? process.env.GITHUB_SECRET_Jo
    : process.env.GITHUB_SECRET_Diyon;

export const authOptions = {  // Ekspor secara eksplisit
  providers: [
    githubAuth({
      clientId: clientId,
      clientSecret: clientSecret,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
