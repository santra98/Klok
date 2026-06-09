import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 overflow-y-auto"
      style={{ background: "var(--bg)" }}
    >
      <div className="w-full max-w-md my-4">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 mb-5 cursor-pointer"
          >
            <div
              className="w-9 h-9 flex items-center justify-center"
              style={{ background: "var(--btn-primary-bg)", borderRadius: "8px" }}
            >
              <i className="fa-solid fa-calendar-check text-sm" style={{ color: "var(--btn-primary-text)" }}></i>
            </div>
            <span
              className="text-2xl font-bold"
              style={{ color: "var(--text)", letterSpacing: "-0.02em" }}
            >
              Klok
            </span>
          </Link>
        </div>
        {children}
        <p
          className="text-center text-xs mt-6"
          style={{ color: "var(--text-3)" }}
        >
          By continuing you agree to our Terms &amp; Privacy Policy
        </p>
      </div>
    </div>
  );
}
