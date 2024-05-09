import axios, { CanceledError } from "axios";

export default axios.create({
    baseURL: "https://jsonplaceholder.codecraaft.com/api/v1/",
});

export { CanceledError };
