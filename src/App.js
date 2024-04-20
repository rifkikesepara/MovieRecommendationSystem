import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Indicators from "./Pages/Indicators";
import SearchResult from "./Pages/SearchResult";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Main />} />
        <Route index path="/movieRecommend" element={<Indicators />} />
        <Route index path="/search" element={<SearchResult />} />
      </Routes>
    </BrowserRouter>
  );
}
