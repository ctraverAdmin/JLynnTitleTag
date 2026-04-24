export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <img src="/logo.png" alt="J Lynn Tag N Title" className="h-20 w-auto" />
          <p className="mt-4 text-sm text-white/70">
            Friendly local help for tag, title, registration, and notary services.
          </p>
        </div>

        <div>
          <h3 className="font-bold uppercase tracking-widest text-cyan-300">Contact</h3>
          <p className="mt-4 text-white/80">(570) 737-3003</p>
          <p className="text-white/80">Springville, PA</p>
        </div>

        <div>
          <h3 className="font-bold uppercase tracking-widest text-cyan-300">Hours</h3>
          <p className="mt-4 text-white/80">Mon - Fri: 9:00 AM - 5:00 PM</p>
          <p className="text-white/80">Sat: By Appointment</p>
          <p className="text-white/80">Sun: Closed</p>
        </div>
      </div>
    </footer>
  );
}