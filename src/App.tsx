import { Button } from "./components/Button";

const Icon = () => <span>🔴</span>;

const App = () => {
  return (
    <div>
      <Button icon={<Icon />}>This is button</Button>

      <Button icon={<Icon />} asChild>
        <a href="https://kciter.so">This is link</a>
      </Button>
    </div>
  );
};

export default App;
