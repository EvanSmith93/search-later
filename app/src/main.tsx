import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import List from "./pages/List.tsx";
import Search from "./pages/Search.tsx";
import PageLayout from "./pages/PageLayout.tsx";
import Settings from "./pages/Settings.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="/" element={<List />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="/later" element={<Search />} />
    </Routes>
  </BrowserRouter>
);
