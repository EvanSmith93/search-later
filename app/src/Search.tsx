import { useSearchParams } from "react-router";

const Search = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  if (search) {
    const data = localStorage.getItem("searches");

    let links = data ? JSON.parse(data) : [];
    if (!Array.isArray(links)) {
      links = [];
    }

    links.push(search);
    localStorage.setItem("searches", JSON.stringify(links));
    window.close();
  }

  return <></>;
};

export default Search;
