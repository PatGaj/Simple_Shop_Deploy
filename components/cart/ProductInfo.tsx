import Badge from "../ui/Badge";

function ProductInfo({
  imageUrl,
  name,
  price,
  category,
}: {
  imageUrl: string;
  name: string;
  price: number;
  category: string;
}) {
  return (
    <div className="flex gap-x-8">
      <div className="flex justify-center items-center p-3 border border-[var(--color-border-secondary)] rounded-md w-[170px] h-[140px]">
        <img src={imageUrl} alt={name} className="h-full" />
      </div>
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-3">
          <span className="heading7 font-medium">{name}</span>
          <Badge text={category} className="w-max" />
        </div>
        <span className="heading6 font-medium">${price}</span>
      </div>
    </div>
  );
}
export default ProductInfo;
