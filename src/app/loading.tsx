export default function Loading() {
  return (
    <div className="min-h-screen bg-[#ECECF8] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 bg-[#6C6FDF] rounded-xl flex items-center justify-center shadow-lg shadow-[#6C6FDF]/30 animate-pulse">
          <i className="fa-solid fa-calendar-check text-white"></i>
        </div>
        <div className="text-sm font-semibold text-[#9CA3AF]">Loading...</div>
      </div>
    </div>
  );
}
