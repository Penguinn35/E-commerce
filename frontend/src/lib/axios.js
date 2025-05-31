import axios from "axios";
console.log("Current Mode:", import.meta.env.MODE); 

const axiosInstance = axios.create({
	baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;