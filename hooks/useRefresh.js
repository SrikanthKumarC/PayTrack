import axios from "../axios";
import useAuth from "./useAuth";

const useRefresh = () => {
  const { setAuth } = useAuth();
  const getRefreshToken = async () => {
    try {
      const result = await axios.get("/refresh", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      // get status code
      console.log(JSON.stringify(result?.data));
      const accessToken = result?.data?.accessToken;
      setAuth((prev) => {
        return { ...prev, accessToken: accessToken };
      });
      return accessToken;
    } catch (e) {
      console.error(e.message);
    }
  };
  return getRefreshToken;
};

export default useRefresh;
