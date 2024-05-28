import axios from "axios";
import { useEffect, useRef } from "react";

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

export function useDetails(movieName, data = (data) => {}) {
  const extractAPIContents = (json) => {
    const { pages } = json.query;
    return Object.keys(pages).map((id) => pages[id].extract);
  };
  useEffect(() => {
    axios
      .get(
        "https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&titles=" +
          movieName.replaceAll(" ", "_")
      )
      .then((res) => data(extractAPIContents(res.data)));
  }, []);
}
