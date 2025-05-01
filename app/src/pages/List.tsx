import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { SquareArrowOutUpRight, Trash } from "lucide-react";
import { SearchEngine, searchEngineInfo } from "@/helpers";

function List() {
  const [searches, setSearches] = useState<string[]>([]);

  useEffect(() => getSearches(), []);

  const getSearches = () => {
    const searches = localStorage.getItem("searches");
    if (searches) {
      setSearches(JSON.parse(searches).reverse());
    }
  };

  const searchEngines = JSON.parse(
    localStorage.getItem("searchEngines") ?? JSON.stringify([SearchEngine.GOOGLE])
  ) as SearchEngine[];

  const removeSearch = (index: number) => {
    const newSearches = searches.filter((_, i) => i !== index);
    localStorage.setItem(
      "searches",
      JSON.stringify([...newSearches].reverse())
    );
    setSearches(newSearches);
  };

  const onClickLink = (
    search: string,
    index: number,
    engine: SearchEngine
  ) => {
    const info = searchEngineInfo[engine];
    const url = info.getUrl(encodeURIComponent(search));
    window.open(url, "_blank");

    removeSearch(index);
  };

  return (
    <>
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
            className="text-xl cursor-pointer mt-2 mr-2"
            onClick={() => onClickLink(search, index, searchEngines[0])}
          >
            {search}
            <SquareArrowOutUpRight strokeWidth={2.5} />
          </Button>
          {/* <span className="text-xl font-medium mt-2 mr-2">{search}</span> */}
          {searchEngines.map((engine) => {
            const info = searchEngineInfo[engine];
            return (
              <Button
                variant="outline"
                className="text-xl cursor-pointer mr-2"
                onClick={() => onClickLink(search, index, engine)}
              >
                <img src={info.icon} width={18} />
              </Button>
            );
          })}
        </div>
      ))}

      {searches.length === 0 && (
        <p className="text-lg text-gray-400">No searches saved</p>
      )}
    </>
  );
}

export default List;
