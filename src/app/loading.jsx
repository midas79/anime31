"use client";
const Loading = () => {
  return (
    <div className="shell py-24 flex flex-col justify-center items-center gap-4" role="status">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-[3px] border-rule rounded-full opacity-40"></div>
        <div className="absolute inset-0 border-[3px] border-transparent border-t-accent rounded-full animate-spin"></div>
      </div>
      <p className="text-sm text-muted">Memuat</p>
    </div>
  );
};
export default Loading;
