import axios from "axios";
import { useEffect } from "react";

export default function useRecommendation(movieName, data = (data) => {}) {
  useEffect(() => {
    axios
      .post(
        "http://127.0.0.1:5000/predict/title",
        { movie: movieName },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => data(res.data))
      .catch((err) => console.log(err));
  }, []);
}
