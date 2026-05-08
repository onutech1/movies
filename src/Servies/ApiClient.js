import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ea789d95b142473dbedee936017b4354",
  },
});
