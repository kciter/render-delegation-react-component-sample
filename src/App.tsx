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

      <Button icon={<Icon />} onClick={() => alert("Hi!")} asChild>
        <a onClick={() => alert("Hello!")} ref={childRef}>
          Show alert
        </a>
      </Button>
    </div>
  );
};

export default App;
