import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getBrowserEngine } from "@/helpers";

const Setup = () => {
  const defaultValue = getBrowserEngine() ?? "chromium";

  return (
    <Tabs defaultValue={defaultValue} className="w-[400px]">
      <TabsList>
        <TabsTrigger value="chromium">Chrome</TabsTrigger>
        <TabsTrigger value="firefox">Firefox</TabsTrigger>
        <TabsTrigger value="webkit">Safari</TabsTrigger>
      </TabsList>
      <TabsContent value="chromium">Chrome</TabsContent>
      <TabsContent value="firefox">Firefox</TabsContent>
      <TabsContent value="webkit">Safari</TabsContent>
    </Tabs>
  );
};

export default Setup;
