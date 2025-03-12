import { useEffect, useState } from "react";

function App() {
  const [searches, setSearches] = useState<string[]>([]);

  useEffect(() => getSearches(), []);

  const getSearches = () => {
    const searches = localStorage.getItem("searches");
    if (searches) {
      setSearches(JSON.parse(searches));
    }
  };

  const removeSearch = (index: number) => {
    console.log("removeSearch", index);
    const newSearches = searches.filter((_, i) => i !== index);
    localStorage.setItem("searches", JSON.stringify(newSearches));
    setSearches(newSearches);
  };

  const onClickLink = (search: string, index: number) => {
    removeSearch(index);
    console.log("redirect", search);
    const link = `https://google.com/search?q=${encodeURIComponent(search)}`;
    window.open(link, "_blank");
  };

  return (
    <div className="p-12">
      <h1 className="text-4xl mb-2">Search Later</h1>

      {searches.map((search, index) => (
        <li className="mb-2" key={index}>
          <a
            className="text-2xl underline cursor-pointer"
            onClick={() => onClickLink(search, index)}
          >
            {search}
          </a>
        </li>
      ))}
      {searches.length === 0 && (
        <p className="text-xl text-gray-400">No searches saved</p>
      )}
    </div>
  );
}

export default App;
