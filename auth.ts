import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
 
// export const { auth, handlers, signIn, signOut } = NextAuth({
//   providers: [GitHub, Google],
// })


export const {
    handlers: { GET, POST },
    auth,
} = NextAuth({
    providers:[GitHub],
})