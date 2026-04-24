export default function App() {
  const services = [
    ["📄", "Title Transfers", "Straightforward help with title paperwork and transfer-related needs."],
    ["🚗", "Vehicle Registration", "Support for registration paperwork and common registration questions."],
    ["🔖", "Tag / Plate Help", "Help with tags, plates, renewals, and related paperwork needs."],
    ["🖋️", "Notary Services", "Convenient local notary help for important documents."],
    ["🏍️", "ATV & Snowmobile Paperwork", "A clear place to show customers you handle recreational vehicle paperwork."],
    ["📁", "General Paperwork Help", "Not sure what you need? Reach out and get pointed in the right direction."],
  ];

  return (
    <div className="min-h-screen bg-white font-['Inter'] text-[#07194a]">
      {/* NAVBAR */}
      <header className="relative z-50 border-b bg-white">
        <div className="flex items-center justify-between px-4 py-3 lg:h-[110px] lg:px-8">
          {/* Mobile logo */}
          <img
            src="/logo.png"
            alt="J Lynn Tag N Title"
            className="h-16 w-auto lg:hidden"
          />

          {/* Desktop spacing where floating logo sits */}
          <div className="hidden w-[220px] lg:block" />

          <nav className="hidden flex-1 justify-center gap-10 text-[17px] font-extrabold lg:flex">
            <a className="border-b-4 border-[#174ac9] pb-2 text-[#174ac9]" href="#">
              Home
            </a>
            <a href="#services">Services</a>
            <a href="#bring">What to Bring</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:5707373003"
              className="rounded-lg bg-[#174ac9] px-4 py-3 text-sm font-bold text-white lg:px-6"
            >
              Call
              <span className="hidden sm:inline"> (570) 737-3003</span>
            </a>

            <div className="text-3xl font-black lg:text-4xl">☰</div>
          </div>
        </div>
      </header>

      {/* Floating desktop logo */}
      <div className="absolute left-8 top-[28px] z-[60] hidden lg:block">
        <img
          src="/logo.png"
          alt="J Lynn Tag N Title"
          className="h-[145px] w-auto"
        />
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#eaf3ff] lg:h-[560px]">
        {/* Mobile image first */}
        <img
          src="/building.jpg"
          alt="J Lynn building"
          className="h-[280px] w-full object-cover sm:h-[360px] lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[65%]"
        />

        {/* Left panel */}
        <div className="relative z-10 bg-[#eaf3ff] px-6 py-10 lg:absolute lg:left-0 lg:top-0 lg:flex lg:h-full lg:w-[50%] lg:items-center lg:rounded-r-[999px] lg:px-20">
          <div className="max-w-[540px] lg:pt-16">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#174ac9] lg:text-[16px]">
              Local. Friendly. Reliable.
            </p>

            <h1 className="mt-4 font-['Lora'] text-4xl font-bold leading-tight sm:text-5xl lg:mt-5 lg:text-[60px]">
              Tag, Title &
              <br />
              Notary Services
              <span className="block font-['Pacifico'] text-4xl font-normal text-[#174ac9] sm:text-5xl lg:text-[52px]">
                Made Simple.
              </span>
            </h1>

            <p className="mt-5 text-base font-semibold leading-7 text-[#0f255c] sm:text-lg lg:mt-6 lg:text-[18px]">
              J Lynn Tag N Title provides fast, friendly, and dependable help
              with title work, registration services, notary needs, and more.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="tel:5707373003"
                className="rounded-lg bg-[#174ac9] px-6 py-3 text-center font-bold text-white"
              >
                ☎ Call (570) 737-3003
              </a>

              <a
                href="#bring"
                className="rounded-lg border-2 border-[#174ac9] bg-white px-6 py-3 text-center font-bold text-[#174ac9]"
              >
                What to Bring
              </a>
            </div>

            <p className="mt-6 text-lg font-bold">📍 Springville, PA</p>
          </div>
        </div>

        {/* Right help card */}
        <div className="relative z-20 mx-6 mb-8 rounded-xl bg-white p-6 shadow-2xl lg:absolute lg:right-10 lg:top-1/2 lg:mx-0 lg:mb-0 lg:w-[320px] lg:-translate-y-1/2">
          <p className="text-sm font-bold text-[#174ac9]">Need help now?</p>

          <h2 className="mt-2 font-['Lora'] text-2xl font-bold leading-tight lg:text-[28px]">
            We’ll Help You Figure Out What You Need.
          </h2>

          <p className="mt-3 text-sm leading-6 text-[#0f255c]">
            If you are unsure what paperwork to bring or which service you need,
            contact us and we’ll help point you in the right direction.
          </p>

          <div className="mt-5 space-y-3">
            <a
              href="tel:5707373003"
              className="block rounded-lg bg-[#174ac9] py-3 text-center font-bold text-white"
            >
              ☎ Call Now
            </a>

            <a
              href="mailto:jlynntnt@gmail.com"
              className="block rounded-lg border border-[#174ac9] py-3 text-center font-bold text-[#174ac9]"
            >
              ✉ Send a Message
            </a>

            <a
              href="https://www.facebook.com/share/14a61e3151s/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              className="block rounded-lg border border-[#174ac9] py-3 text-center font-bold text-[#174ac9]"
            >
              Facebook
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-12 text-center lg:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#174ac9]">
          Our Services
        </p>

        <h2 className="mt-2 font-['Lora'] text-3xl font-bold sm:text-4xl lg:text-[36px]">
          Here to Help With What Matters
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          {services.map(([icon, title, text]) => (
            <div key={title} className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="text-4xl text-[#174ac9]">{icon}</div>
              <h3 className="mt-3 text-lg font-bold leading-tight">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="mt-7 inline-block rounded-lg bg-[#174ac9] px-8 py-3 font-bold text-white"
        >
          View All Services
        </a>
      </section>

      {/* WHAT TO BRING */}
      <section id="bring" className="bg-[#eaf3ff] px-6 py-12 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#174ac9]">
              What to Bring
            </p>
            <h2 className="mt-2 font-['Lora'] text-3xl font-bold sm:text-4xl">
              Come Prepared, Save Time.
            </h2>
            <p className="mt-4 text-base font-semibold leading-7 text-[#0f255c]">
              The exact paperwork depends on the service, but these basics can
              help get things started faster.
            </p>
          </div>

          <div className="grid gap-3">
            {[
              "Photo ID or Driver’s License",
              "Current Title or Registration",
              "Proof of Insurance",
              "Bill of Sale, if applicable",
              "Vehicle Information / VIN",
              "Any paperwork you already have",
            ].map((item) => (
              <div key={item} className="rounded-xl bg-white p-4 font-bold shadow-sm">
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section id="contact" className="bg-[#08275e] px-6 py-8 text-white lg:px-10">
        <div className="grid gap-6 text-sm md:grid-cols-3">
          <div>
            <p className="text-lg font-bold">📍 Springville, PA</p>
            <p className="mt-1 text-white/80">Proudly serving the local community.</p>
          </div>

          <div>
            <p className="text-lg font-bold">🕘 Hours</p>
            <p className="mt-1 text-white/80">Monday-Wednesday 5:30 PM to 9:00 PM</p>
            <p className="text-white/80">Thursday - Friday: By Appointment (5PM-9PM)</p>
            <p className="text-white/80">Saturday: By Appointment (8AM-7PM) / Sunday's Closed</p>
            <p className="text-white/80">To schedule an appointment call or text (570) 396-4808</p>
          </div>

          <div>
            <p className="text-lg font-bold">Facebook</p>
            <p className="mt-1 text-white/80">Stay up to date on services and updates.</p>
          </div>
        </div>
      </section>

      <div id="faq" />
    </div>
  );
}
