function CustomCheckbox() {
  return (
    <label className="inline-flex items-center cursor-pointer select-none">
      <input type="checkbox" className="peer sr-only" />
      <div className="w-6 h-6 rounded-md border-2 border-payment-border flex items-center justify-center transition-all peer-checked:bg-logo-primary peer-checked:border-logo-primary">
        <img src="/confirm.svg" alt="" className="w-4 h-4 opacity-0 peer-checked:opacity-100 transition-opacity" />
      </div>
    </label>
  );
}
export default CustomCheckbox;
