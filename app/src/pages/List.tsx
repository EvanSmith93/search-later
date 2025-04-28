import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { SquareArrowOutUpRight, Trash } from "lucide-react";

function List() {
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
    localStorage.setItem(
      "searches",
      JSON.stringify([...newSearches].reverse())
    );
    setSearches(newSearches);
  };

  const onClickLink = (search: string, index: number) => {
    const link = `https://google.com/search?q=${encodeURIComponent(search)}`;
    window.open(link, "_blank");

    removeSearch(index);
  };

  return (
    <div className="p-12">
      <h1 className="text-4xl font-bold mb-2">Search Later</h1>

      {searches.map((search, index) => (
        <div key={index}>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-red-100 cursor-pointer mr-2"
            onClick={() => removeSearch(index)}
          >
            <Trash strokeWidth={2.5} />
          </Button>
          <Button
            variant="outline"
            className="text-xl mt-2 cursor-pointer"
            onClick={() => onClickLink(search, index)}
          >
            {search}
            <SquareArrowOutUpRight strokeWidth={2.5} />
          </Button>
        </div>
      ))}

      {searches.length === 0 && (
        <p className="text-lg text-gray-400">No searches saved</p>
      )}
    </div>
  );
}

export default List;
