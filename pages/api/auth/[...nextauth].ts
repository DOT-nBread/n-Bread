import { Axios } from "@/domains/shared/api/axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {},
			async authorize(credentials) {
				const { username, password } = credentials as {
					username: string;
					password: string;
				};
				const response = await Axios.post("/users/login", {
					username,
					password,
					withCredentials: true,
				});
				if (response.status === 200) {
					return {
						id: response.data.data.accessToken,
					};
				}
				return null;
			},
		}),
	],
	pages: {
		signIn: "/",
		signOut: "/",
	},
	callbacks: {
		async session(param) {
			const { session, token } = param;
			const accessToken = token.sub;
			return {
				...session,
				accessToken,
			};
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
});
