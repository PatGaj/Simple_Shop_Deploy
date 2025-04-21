function Logo({ size }: {size:"4xl"|"3xl"}) {
  return (
    <p className={`text-${size} font-semibold`}>
      <span className="text-logo-primary">Nexus</span>Hub
    </p>
  );
}
export default Logo;
