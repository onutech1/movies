import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    // key: import.meta.env.VITE_API_KEY,
    key: "ea789d95b142473dbedee936017b4354",
  },
});

export default apiClient;
