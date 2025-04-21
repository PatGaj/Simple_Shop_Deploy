function Avatar({ src }: { src?: string }) {
  return (
    <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
      <img src={src ? src : "avatar.svg"} alt="Avatar" className="w-full h-full object-cover" />
    </div>
  );
}
export default Avatar;
