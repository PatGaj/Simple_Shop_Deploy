function MenuSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-y-8 flex-grow basis-0">
      <p className="font-semibold text-xl">{title}</p>
      <div className="flex flex-col gap-y-4 text-textColor-secondary">
        {items.map((element, index) => (
          <span key={index}>{element}</span>
        ))}
      </div>
    </div>
  );
}

export default MenuSection;
