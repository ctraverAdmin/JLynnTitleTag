export default function Home() {
  const services = [
    {
      title: "Title Transfers",
      icon: "📄",
      text: "Straightforward help with title paperwork and transfer-related needs.",
    },
    {
      title: "Vehicle Registration",
      icon: "🚗",
      text: "Support for registration paperwork and common registration questions.",
    },
    {
      title: "Tag / Plate Help",
      icon: "🔖",
      text: "Help with tags, plates, renewals, and related paperwork needs.",
    },
    {
      title: "Notary Services",
      icon: "🖋️",
      text: "Convenient local notary help for important documents.",
    },
    {
      title: "ATV & Snowmobile Paperwork",
      icon: "🏍️",
      text: "A clear place to show customers you handle recreational vehicle paperwork.",
    },
    {
      title: "General Paperwork Help",
      icon: "📁",
      text: "Not sure what you need? Reach out and get pointed in the right direction.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0b1744]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <img
            src="/logo.png"
            alt="J Lynn Tag N Title"
            className="h-20 w-auto md:h-24"
          />

          <nav className="hidden items-center gap-10 text-sm font-bold md:flex">
            <a href="#" className="border-b-2 border-[#1d4ed8] pb-2 text-[#1d4ed8]">
              Home
            </a>
            <a href="#services" className="hover:text-[#1d4ed8]">
              Services
            </a>
            <a href="#bring" className="hover:text-[#1d4ed8]">
              What to Bring
            </a>
            <a href="#faq" className="hover:text-[#1d4ed8]">
              FAQ
            </a>
            <a href="#contact" className="hover:text-[#1d4ed8]">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-5">
            <a
              href="tel:5707373003"
              className="hidden rounded-lg bg-[#1d4ed8] px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#1645c0] md:inline-block"
            >
              ☎ Call (570) 737-3003
            </a>

            <button className="text-4xl font-bold text-[#0b1744] md:hidden">
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#eef5ff]">
        <div className="grid min-h-[520px] lg:grid-cols-[42%_58%]">
          {/* LEFT PANEL */}
          <div className="relative z-10 flex items-center bg-[#eef5ff] px-8 py-14 lg:px-14">
            <div className="max-w-xl">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1d4ed8]">
                Local. Friendly. Reliable.
              </p>

              <h1 className="mt-5 text-5xl font-black leading-[1.05] text-[#0b1744] md:text-6xl">
                Tag, Title &
                <br />
                Notary Services
                <span className="block font-serif italic text-[#1d4ed8]">
                  Made Simple.
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-lg font-semibold leading-8 text-[#0f255c]">
                J Lynn Tag N Title provides fast, friendly, and dependable help
                with title work, registration services, notary needs, and more.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href="tel:5707373003"
                  className="rounded-lg bg-[#1d4ed8] px-6 py-3 font-bold text-white shadow-sm hover:bg-[#1645c0]"
                >
                  ☎ Call (570) 737-3003
                </a>

                <a
                  href="#bring"
                  className="rounded-lg border border-[#1d4ed8] bg-white px-6 py-3 font-bold text-[#1d4ed8] hover:bg-blue-50"
                >
                  What to Bring
                </a>
              </div>

              <div className="mt-7 flex items-center gap-3 text-lg font-bold text-[#0f255c]">
                <span className="text-2xl text-[#1d4ed8]">●</span>
                Springville, PA
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative min-h-[520px]">
            <img
              src="/building.jpg"
              alt="J Lynn Tag N Title building"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/10"></div>

            {/* HELP CARD */}
            <div className="absolute right-8 top-1/2 hidden w-[330px] -translate-y-1/2 rounded-xl bg-white p-7 text-[#0b1744] shadow-2xl lg:block">
              <p className="text-sm font-black text-[#1d4ed8]">
                Need help now?
              </p>

              <h2 className="mt-2 text-3xl font-black leading-tight">
                We’ll Help You Figure Out What You Need.
              </h2>

              <p className="mt-4 text-sm font-semibold leading-6 text-[#0f255c]">
                If you are unsure what paperwork to bring or which service you
                need, contact us and we’ll help point you in the right direction.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href="tel:5707373003"
                  className="block rounded-lg bg-[#1d4ed8] px-5 py-3 text-center font-bold text-white hover:bg-[#1645c0]"
                >
                  ☎ Call Now
                </a>

                <a
                  href="mailto:jlynntnt@gmail.com"
                  className="block rounded-lg border border-[#1d4ed8] px-5 py-3 text-center font-bold text-[#1d4ed8] hover:bg-blue-50"
                >
                  ✉ Send a Message
                </a>

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-lg border border-[#1d4ed8] px-5 py-3 text-center font-bold text-[#1d4ed8] hover:bg-blue-50"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white px-6 py-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1d4ed8]">
            Our Services
          </p>

          <h2 className="mt-2 text-4xl font-black text-[#0b1744]">
            Here to Help With What Matters
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-5xl">{service.icon}</div>
                <h3 className="mt-4 text-xl font-black leading-tight">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm font-semibold leading-6 text-[#0f255c]">
                  {service.text}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-8 inline-block rounded-lg bg-[#1d4ed8] px-10 py-3 font-bold text-white hover:bg-[#1645c0]"
          >
            View All Services
          </a>
        </div>
      </section>

      {/* BOTTOM STRIP */}
      <section id="contact" className="bg-[#08275e] px-6 py-7 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div className="flex gap-4">
            <div className="text-4xl">📍</div>
            <div>
              <h3 className="text-xl font-black">Springville, PA</h3>
              <p className="mt-1 text-sm text-white/80">
                Proudly serving the local community.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-4xl">🕘</div>
            <div>
              <h3 className="text-xl font-black">Hours</h3>
              <p className="mt-1 text-sm text-white/80">
                Mon - Fri: 9:00 AM - 5:00 PM
              </p>
              <p className="text-sm text-white/80">
                Sat: By Appointment | Sun: Closed
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-4xl">f</div>
            <div>
              <h3 className="text-xl font-black">Follow Us on Facebook</h3>
              <p className="mt-1 text-sm text-white/80">
                Stay up to date on services, reminders, and updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO BRING HIDDEN ANCHOR */}
      <div id="bring" className="sr-only">
        What to Bring
      </div>
      <div id="faq" className="sr-only">
        FAQ
      </div>
    </div>
  );
}