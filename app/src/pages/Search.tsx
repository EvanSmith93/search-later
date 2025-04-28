import { useSearchParams } from "react-router";

const Search = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("q");

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

  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold">Saved</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        You may close this tab
      </p>
    </div>
  );
};

export default Search;
