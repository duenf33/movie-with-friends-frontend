import axios from "axios";

const Axios = axios.create({
	baseURL: "/api",
	// process.env.NODE_ENV === "development" ? "http://localhost:3001/" : "/api",
	timeout: 50000,
});

export default Axios;
