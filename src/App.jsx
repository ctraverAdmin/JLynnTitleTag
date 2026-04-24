export default function App() {
  const services = [
    ["📄", "Title Transfers", "Straightforward help with title paperwork and transfer-related needs."],
    ["🚗", "Vehicle Registration", "Support for registration paperwork and common registration questions."],
    ["🔖", "Tag / Plate Help", "Help with tags, plates, renewals, and related paperwork needs."],
    ["🖋️", "Notary Services", "Convenient local notary help for important documents."],
    ["🏍️", "ATV & Snowmobile Paperwork", "A clear place to show customers you handle recreational vehicle paperwork."],
    ["📁", "General Paperwork Help", "Not sure what you need? Reach out and get pointed in the right direction."]
  ];

  return (
    <div className="min-h-screen bg-white text-[#07194a] font-['Inter']">

      {/* NAVBAR */}<header className="h-[110px] border-b bg-white">
  <div className="flex h-full items-center justify-between px-6">

{/* FLOATING LOGO */}
<div className="absolute left-10 top-[18px] z-50">
  <img
    src="/logo.png"
    alt="J Lynn Tag N Title"
    className="h-[135px] w-auto"
  />
</div>

    {/* LEFT LOGO (pinned left) */}
    <div className="flex items-center">
      </div>

    {/* CENTER NAV */}
    <nav className="hidden flex-1 justify-center gap-10 text-[17px] font-extrabold md:flex">
      <a className="border-b-4 border-[#174ac9] pb-2 text-[#174ac9]" href="#">
        Home
      </a>
      <a href="#services">Services</a>
      <a href="#bring">What to Bring</a>
      <a href="#faq">FAQ</a>
      <a href="#contact">Contact</a>
    </nav>

    {/* RIGHT BUTTON */}
    <div className="flex items-center gap-6">
      <a
        href="tel:5707373003"
        className="rounded-lg bg-[#174ac9] px-6 py-3 font-bold text-white"
      >
        ☎ Call (570) 737-3003
      </a>

      <div className="text-4xl font-black">☰</div>
    </div>

  </div>
</header>

      {/* HERO */}
<section className="relative min-h-[560px] overflow-hidden bg-[#eaf3ff]">
  {/* Building Image */}
  <img
    src="/building.jpg"
    alt="J Lynn building"
    className="absolute right-0 top-0 h-full w-[68%] object-cover"
  />

  {/* Left Curved Panel */}
  <div className="relative z-10 flex min-h-[560px] w-[52%] items-center rounded-r-[999px] bg-[#eaf3ff] px-20">
    <div className="relative z-10 max-w-[520px] pt-20">
      <p className="text-[16px] font-black uppercase tracking-[0.2em] text-[#174ac9]">
        LOCAL. FRIENDLY. RELIABLE.
      </p>

      <h1 className="mt-5 font-['Lora'] text-[60px] font-bold leading-tight">
        Tag, Title &
        <br />
        Notary Services
        <span className="block font-['Pacifico'] text-[52px] text-[#174ac9]">
          Made Simple.
        </span>
      </h1>

      <p className="mt-6 text-[18px] font-semibold leading-7 text-[#0f255c]">
        J Lynn Tag N Title provides fast, friendly, and dependable help
        with title work, registration services, notary needs, and more.
      </p>

      <div className="mt-6 flex gap-4">
        <a
          href="tel:5707373003"
          className="rounded-lg bg-[#174ac9] px-6 py-3 font-bold text-white"
        >
          ☎ Call (570) 737-3003
        </a>

        <a
          href="#bring"
          className="rounded-lg border-2 border-[#174ac9] bg-white px-6 py-3 font-bold text-[#174ac9]"
        >
          What to Bring
        </a>
      </div>

      <p className="mt-6 text-lg font-bold">📍 Springville, PA</p>
    </div>
  </div>

  {/* Right Help Card */}
  <div className="absolute right-10 top-1/2 z-20 w-[320px] -translate-y-1/2 rounded-xl bg-white p-6 shadow-2xl">
    <p className="text-sm font-bold text-[#174ac9]">Need help now?</p>

    <h2 className="mt-2 font-['Lora'] text-[28px] font-bold leading-tight">
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
        href="#"
        className="block rounded-lg border border-[#174ac9] py-3 text-center font-bold text-[#174ac9]"
      >
        Facebook
      </a>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <section id="contact" className="bg-[#08275e] px-10 py-6 text-white">
        <div className="grid grid-cols-3 gap-6 text-sm">
          <div>
            <p className="font-bold">📍 Springville, PA</p>
            <p>Proudly serving the local community.</p>
          </div>

          <div>
            <p className="font-bold">🕘 Hours</p>
            <p>Mon - Fri: 9AM - 5PM</p>
            <p>Sat: By Appointment | Sun: Closed</p>
          </div>

          <div>
            <p className="font-bold">Facebook</p>
            <p>Stay up to date on services and updates.</p>
          </div>
        </div>
      </section>

    </div>
  );
}