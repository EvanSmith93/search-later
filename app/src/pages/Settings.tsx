import { useEffect, useState } from "react";
import { SearchLocation, searchLocationInfo } from "@/helpers";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

function Settings() {
  const initialLocations = JSON.parse(
    localStorage.getItem("locations") ?? JSON.stringify([SearchLocation.GOOGLE])
  ) as SearchLocation[];
  const [locations, setLocations] =
    useState<SearchLocation[]>(initialLocations);

  useEffect(() => {
    console.log(locations);
    localStorage.setItem("locations", JSON.stringify(locations));
  }, [locations]);

  const toggleLocation = (location: SearchLocation, checked: boolean) => {
    if (checked) {
      setLocations([...new Set([...locations, location])]);
    } else if (locations.length > 1) {
      setLocations(locations.filter((loc) => loc !== location));
    }
  };

  return (
    <div className="p-12">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <h2 className="text-xl font-bold mb-2">Search Locations</h2>
      {Object.values(SearchLocation).map((location, index) => {
        const info = searchLocationInfo[location];

        return (
          <div className="flex items-center space-x-2 mb-3">
            <Checkbox
              key={index}
              id={location}
              value={location}
              checked={locations.includes(location)}
              onCheckedChange={(checked: boolean) =>
                toggleLocation(location, checked)
              }
            />
            <Label htmlFor={location}>
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
