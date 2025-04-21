function Button({ children }: { children: React.ReactNode }) {
  return <button className="text-tile bg-logo-primary py-3.5 px-8 rounded-md">{children}</button>;
}
export default Button;
