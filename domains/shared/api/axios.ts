import axios from "axios";
import { getSession } from "next-auth/react";

export const Axios = axios.create({
	baseURL: "http://localhost:8080",
	headers: { "Content-Type": "application/json" },
});

Axios.interceptors.request.use(async (request) => {
	const session = await getSession();

	console.log("session", session);
	if (session) {
		// @ts-ignore 2532
		request.headers.Authorization = session.accessToken;
	}

	return request;
});

Axios.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		console.error(error);
	},
);
