import { useState, useEffect } from "react";
import { CrossIcon, MinusIcon } from "../icons";

type CounterProps = {
  max: number;
  onChange?: (value: number) => void;
  value?: number;
};

function Counter({ max, onChange, value = 1 }: CounterProps) {
  const [quantity, setQuantity] = useState(value);

  useEffect(() => {
    if (onChange) {
      onChange(quantity);
    }
  }, [quantity, onChange]);

  const increment = () => {
    setQuantity((prev) => (prev < max ? prev + 1 : prev));
  };

  const decrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  return (
    <div className="flex items-center gap-x-3.5 border border-textColor-primary rounded-md w-max h-max py-3.5 px-6">
      <button className="cursor-pointer" onClick={decrement}>
        <MinusIcon />
      </button>
      <span className="w-6 text-center">{quantity}</span>
      <button className="cursor-pointer" onClick={increment}>
        <CrossIcon />
      </button>
    </div>
  );
}

export default Counter;
