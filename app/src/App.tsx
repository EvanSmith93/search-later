import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";

function App() {
  const [searches, setSearches] = useState<string[]>([]);

  useEffect(() => getSearches(), []);

  const getSearches = () => {
    const searches = localStorage.getItem("searches");
    if (searches) {
      setSearches(JSON.parse(searches).reverse());
    }
  };

  const removeSearch = (index: number) => {
    const newSearches = searches.filter((_, i) => i !== index);
    localStorage.setItem("searches", JSON.stringify([...newSearches].reverse()));
    setSearches(newSearches);
  };

  const onClickLink = (search: string, index: number) => {
    const link = `https://google.com/search?q=${encodeURIComponent(search)}`;
    window.open(link, "_blank");

    removeSearch(index);
  };

  return (
    <div className="p-12">
      <h1 className="text-4xl">Search Later</h1>

      {searches.map((search, index) => (
        <div key={index}>
          <Button
            variant="ghost"
            className="text-xl mt-2 cursor-pointer"
            onClick={() => onClickLink(search, index)}
          >
            {search}
            <SquareArrowOutUpRight strokeWidth={2.5} />
          </Button>
        </div>
      ))}

      {searches.length === 0 && (
        <p className="text-xl text-gray-400">No searches saved</p>
      )}
    </div>
  );
}

export default App;
