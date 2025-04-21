function SelectForm({ label, options }: { label: string; options: string[] }) {
  return (
    <div className="flex flex-col gap-y-4">
      <label className="text-lg font-medium">{label}</label>
      <div className="relative">
        <select className="appearance-none w-full border border-payment-border rounded-md p-3.5 pr-10">
          {options.map((element, index) => (
            <option key={index} className="bg-footer">{element}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
          <img src="/dropdown.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default SelectForm;
