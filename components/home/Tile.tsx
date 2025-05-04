import clsx from "clsx";

function Tile({ imageURL, title, className }: { imageURL: string; title: string; className?: string }) {
  return (
    <div className="flex flex-col gap-y-6 items-center justify-center h-[190px] w-[220px] bg-[var(--color-tile)] border border-[var(--color-border-primary)] rounded-md">
      <img src={imageURL} alt={`${title} Image`} className={clsx(className)} />
      <span className="heading6 font-medium">{title}</span>
    </div>
  );
}
export default Tile;
