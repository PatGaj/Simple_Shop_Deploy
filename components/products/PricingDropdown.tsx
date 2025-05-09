import { useState, useEffect } from "react";
import InputField from "../ui/InputField";
import { DropDownIcon } from "../icons";
import DropdownComponents from "../ui/DropdownComponents/DropdownComponents";

function PricingDropdown({ onChange }: { onChange?: (data: { minPrice: string; maxPrice: string }) => void }) {
  const [max, setMax] = useState("");
  const [min, setMin] = useState("");

  useEffect(() => {
    onChange?.({ minPrice: min, maxPrice: max });
  }, [min, max, onChange]);

  return (
    <DropdownComponents withTitle title="Price" defaultOpen>
      <InputField
        variant="leftButton"
        placeholder="$ Min Price"
        textButton="USD"
        value={min}
        onChange={(e) => setMin(e.target.value)}
        withRightIcon
        rightIcon={<DropDownIcon />}
        className="w-full"
      />
      <InputField
        variant="leftButton"
        placeholder="$ Max Price"
        textButton="USD"
        value={max}
        onChange={(e) => setMax(e.target.value)}
        withRightIcon
        rightIcon={<DropDownIcon />}
        className="w-full"
      />
    </DropdownComponents>
  );
}

export default PricingDropdown;
