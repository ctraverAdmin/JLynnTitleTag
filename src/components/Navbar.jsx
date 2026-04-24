export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <img src="/logo.png" alt="J Lynn Tag N Title" className="h-16 w-auto" />
        </div>

        <nav className="hidden gap-8 text-sm font-bold text-slate-700 md:flex">
          <a href="#services" className="hover:text-cyan-600">Services</a>
          <a href="#bring" className="hover:text-cyan-600">What to Bring</a>
          <a href="#contact" className="hover:text-cyan-600">Contact</a>
        </nav>

        <a
          href="tel:5707373003"
          className="rounded-xl bg-cyan-600 px-5 py-3 text-sm font-bold text-white hover:bg-cyan-700"
        >
          Call Now
        </a>
      </div>
    </header>
  );
}