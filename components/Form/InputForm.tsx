function InputForm({
  type,
  placeholder,
  label,
}: {
  type: "password" | "email" | "tel";
  placeholder: string;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-y-4">
      <label className="text-lg font-medium">{label}</label>
      <input type={type} placeholder={placeholder} className="border border-payment-border rounded-md p-3.5" />
    </div>
  );
}
export default InputForm;
