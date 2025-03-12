import { Button } from "@/components/ui/button";

function App() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
}

export default App;
