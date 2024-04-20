import { useEffect, useRef } from "react";
import { Button } from "./components/Button";

const Icon = () => <span>🔴</span>;

const App = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const childRef = useRef<HTMLAnchorElement>(null);

  return (
    <div>
      <Button icon={<Icon />} ref={buttonRef}>
        This is button
      </Button>

      <Button icon={<Icon />} asChild>
        <a href="https://kciter.so" ref={childRef}>
          This is link
        </a>
      </Button>
    </div>
  );
};

export default App;
