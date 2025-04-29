import { useEffect, useState } from "react";
import { SearchEngine, searchEngineInfo } from "@/helpers";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

function Settings() {
  const initialEngines = JSON.parse(
    localStorage.getItem("searchEngines") ??
      JSON.stringify([SearchEngine.GOOGLE])
  ) as SearchEngine[];
  const [searchEngines, setSearchEngines] =
    useState<SearchEngine[]>(initialEngines);

  useEffect(() => {
    localStorage.setItem("searchEngines", JSON.stringify(searchEngines));
  }, [searchEngines]);

  const toggleEngine = (engine: SearchEngine, checked: boolean) => {
    if (checked) {
      setSearchEngines([...new Set([...searchEngines, engine])]);
    } else if (searchEngines.length > 1) {
      setSearchEngines(searchEngines.filter((loc) => loc !== engine));
    }
  };

  return (
    <div className="p-12">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <h2 className="text-xl font-bold mb-2">Search Engines</h2>
      {Object.values(SearchEngine).map((engine, index) => {
        const info = searchEngineInfo[engine];

        return (
          <div className="flex items-center space-x-2 mb-3">
            <Checkbox
              key={index}
              id={engine}
              value={engine}
              checked={searchEngines.includes(engine)}
              onCheckedChange={(checked: boolean) =>
                toggleEngine(engine, checked)
              }
            />
            <Label htmlFor={engine}>
              <img src={info.icon} width={18} />
              {info.name}
            </Label>
          </div>
        );
      })}
    </div>
  );
}

export default Settings;
