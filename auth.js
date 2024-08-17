import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import connectDB from "./lib/config/connectDB";
export const { handlers, signIn, signOut, auth } = NextAuth({
  // Configure one or more authentication providers
  providers:[
    Credentials({
      name : 'Credentials',
      credentials: {
        email : {label : 'Email', type : 'email'},
        password : {label : 'Password', type : 'password'},
      },
      authorize : async (credentials) => {
        const email = credentials.email;
        const password = credentials.password;

        if(!email || !password){
          throw new CredentialsSignIn('Invalid Credentials');
        };
        await connectDB()
        const user = await User.findOne({email}).select('+password');

        if(!user){
          throw new CredentialsSignIn('Invalid Email or Password');
        };
        const isMatch = await compare(password, user.password) || user.matchPassword(password);
        if(!isMatch){
          throw new CredentialsSignIn('Invalid Credentials');
        };
        return user;
      }
    })
  ],
});
