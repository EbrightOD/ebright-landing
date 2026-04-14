'use client'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">

      {/* Top red bar */}
      <div className="h-1 w-full bg-[#E8181A]" />

      {/* Navbar */}
      <nav className="w-full px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <span className="bg-[#E8181A] text-white text-sm font-bold px-4 py-1.5 rounded-full tracking-wide">
            ebright
          </span>
          <span className="text-gray-400 text-sm">Internal Systems</span>
        </div>
      </nav>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center">

        {/* Logo mark */}
        <div className="w-20 h-20 bg-[#E8181A] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-red-200">
          <span className="text-white font-black text-4xl tracking-tight">e</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#111111] mb-3">
          Welcome to ebright
        </h1>
        <p className="text-gray-400 text-base mb-12 max-w-sm">
          Select a system below to get started.
        </p>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row gap-5 w-full max-w-2xl">

          {/* Staff Portal */}
          <a
            href="https://portal.ebright.my"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-gray-200 rounded-2xl p-6 text-left hover:border-gray-300 hover:bg-gray-50 transition-all group"
          >
            <div className="mb-4 w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-[#111111] font-semibold text-lg mb-1">Staff Portal</h2>
            <p className="text-gray-400 text-sm mb-5">
              Manage staff records, operations, and internal workflows.
            </p>
            <div className="flex items-center gap-1.5 text-gray-400 text-xs group-hover:text-gray-500 transition-colors">
              <span>portal.ebright.my</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>

          {/* Dashboard */}
          <a
            href="https://dashboard.ebright.my"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#E8181A] rounded-2xl p-6 text-left hover:bg-[#cc1517] transition-all group"
          >
            <div className="mb-4 w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3"  y="13" width="4" height="8" rx="1" fill="white" />
                <rect x="10" y="9"  width="4" height="12" rx="1" fill="white" />
                <rect x="17" y="4"  width="4" height="17" rx="1" fill="white" />
              </svg>
            </div>
            <h2 className="text-white font-semibold text-lg mb-1">Dashboard</h2>
            <p className="text-white/70 text-sm mb-5">
              Monitor analytics, metrics, and live system data.
            </p>
            <div className="flex items-center gap-1.5 text-white/60 text-xs group-hover:text-white/80 transition-colors">
              <span>dashboard.ebright.my</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>

        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} ebright · ebright.my
      </footer>

    </div>
  )
}
