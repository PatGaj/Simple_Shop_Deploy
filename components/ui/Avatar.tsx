import SvgProfil from "@/components/icons/Profil";
function Avatar({ src }: { src?: string }) {
  return (
    <div className="flex w-10 h-10 rounded-full justify-center items-center border-2 border-[var(--foreground)] overflow-hidden">
      {src ? (
        <img src={src} alt="Avatar" className="w-full h-full object-cover" />
      ) : (
        <SvgProfil className="text-[var(--foreground)]" />
      )}
    </div>
  );
}
export default Avatar;
