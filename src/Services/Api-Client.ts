import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "66a5b8127c0d4051b5e142dabf8bd2c8",
  },
});
