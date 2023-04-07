import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0dca0c82e06a4494af1c6fbe1ec46ca3",
  },
});
