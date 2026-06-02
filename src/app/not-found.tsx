import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#ECECF8] flex items-center justify-center p-4">
      <div className="text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="text-4xl font-extrabold text-[#1A1A2E] mb-2">404</h1>
        <p className="text-[#6B7280] mb-6">
          This page doesn&apos;t exist. Maybe it was carried forward?
        </p>
        <Link
          href="/"
          className="btn btn-primary shadow-md shadow-[#6C6FDF]/30"
        >
          <i className="fa-solid fa-house"></i> Go Home
        </Link>
      </div>
    </div>
  );
}
