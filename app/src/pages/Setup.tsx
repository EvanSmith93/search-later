import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getBrowserEngine } from "@/helpers";
import ReactPlayer from "react-player";

const Setup = () => {
  const defaultValue = getBrowserEngine() ?? "chromium";

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Setup</h1>
      <Tabs defaultValue={defaultValue} className="">
        <TabsList>
          <TabsTrigger value="chromium">Chrome</TabsTrigger>
          <TabsTrigger value="firefox">Firefox</TabsTrigger>
          <TabsTrigger value="webkit">Safari</TabsTrigger>
        </TabsList>
        <TabsContent value="chromium">
          <h2 className="text-2xl font-bold mb-6 mt-10">Chrome Setup</h2>
          <p>
            Start by copying and pasting this URL into your Chrome address bar:
          </p>
          <code className="block mt-2 p-2 border rounded mb-4">
            chrome://settings/searchEngines
          </code>
          <ReactPlayer
            url="/chrome-intro.mp4"
            controls
            width="70%"
            height="70%"
          />
        </TabsContent>
        <TabsContent value="firefox">
          <h2 className="text-2xl font-bold mb-6 mt-10">Firefox Setup</h2>
          <ReactPlayer
            url="/firefox-intro.mp4"
            controls
            width="70%"
            height="70%"
          />
        </TabsContent>
        <TabsContent value="webkit">
          <h2 className="text-2xl font-bold mb-6 mt-10">Safari Setup</h2>
          Safari is currently not supported.
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Setup;
