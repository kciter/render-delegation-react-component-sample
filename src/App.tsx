import { Button } from "./components/Button";

const App = () => {
  return (
    <div>
      <Button>
        <a href="https://www.google.com">Google</a>
      </Button>
      <Button asChild>
        <a href="https://www.google.com">Google</a>
      </Button>
    </div>
  );
};

export default App;
