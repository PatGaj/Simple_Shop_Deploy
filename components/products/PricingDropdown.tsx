import { useState, useEffect } from "react";
import InputField from "../ui/InputField";
import { DropDownIcon } from "../icons";
import DropdownComponents from "../ui/DropdownComponents";

function PricingDropdown({ onChange }: { onChange?: (data: { minPrice: string; maxPrice: string }) => void }) {
  const [max, setMax] = useState<string>("");
  const [min, setMin] = useState<string>("");

  useEffect(() => {
    if (onChange) {
      onChange({ minPrice: min, maxPrice: max });
    }
  }, [min, max]);

  return (
    <DropdownComponents withTitle title="price">
      <InputField
        type="leftButton"
        placeholder="$ Min Price"
        onDebouncedChange={(data) => setMin(data)}
        textButton="USD"
        withRightIcon
        rightIcon={<DropDownIcon />}
        className="w-full"
      />
      <InputField
        type="leftButton"
        placeholder="$ Max Price"
        onDebouncedChange={(data) => setMax(data)}
        textButton="USD"
        withRightIcon
        rightIcon={<DropDownIcon />}
        className="w-full"
      />
    </DropdownComponents>
  );
}

export default PricingDropdown;
