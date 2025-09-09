import React from "react";
import { motion } from "framer-motion";
import { Users, Megaphone, MapPin, Phone, Facebook, Instagram, Globe, ChevronRight, CheckCircle2, Footprints } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// =========================
// Data & Config
// =========================
const NAV_LINKS = [
  { label: "Tentang", href: "#about" },
  { label: "Pengurus", href: "#team" },
  { label: "Galeri", href: "#gallery" },
  { label: "Kontak", href: "#contact" },
];

const SECTION_IDS = new Set(["home", "about", "team", "gallery", "contact"]);

const contacts = [
  { label: "Sekretariat", value: "Balai Dusun Bogor, Desa Kenteng, Kec. Bandungan, Kab. Semarang", icon: <MapPin className="w-4 h-4" /> },
  { label: "Telepon", value: "+62 8xx-xxxx-xxxx", icon: <Phone className="w-4 h-4" /> },
];

// =========================
// Dev Self-Check ("test cases")
// =========================
function DevSelfCheck() {
  const pageHTML = typeof window !== "undefined" ? document.body.innerText : "";
  const tests = [
    {
      name: "Tidak ada link 'Program' di navigasi",
      pass: NAV_LINKS.every((l) => l.href !== "#programs" && l.label !== "Program"),
    },
    {
      name: "Semua tautan navigasi mengarah ke section yang ada",
      pass: NAV_LINKS.every((l) => SECTION_IDS.has(l.href.replace("#", ""))),
    },
    {
      name: "Section 'Program' tidak ada",
      pass: !/#programs/.test(pageHTML),
    },
    {
      name: "Tidak ada tombol 'Program Unggulan' & 'Kontak Kami' di hero",
      pass: !/Program Unggulan|Kontak Kami/.test(pageHTML),
    },
    {
      name: "Tidak ada tombol 'WhatsApp Sekretariat' & 'Kirim Email' di Kontak",
      pass: !/WhatsApp Sekretariat|Kirim Email/.test(pageHTML),
    },
  ];
  return (
    <section aria-label="Dev Self-Check" className="py-6">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="font-semibold mb-3">Dev Self-Check</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {tests.map((t, i) => (
            <Card key={i} className={`rounded-2xl ${t.pass ? "border-green-200" : "border-red-200"}`}>
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  {t.pass ? (
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-red-600" />
                  )}
                  <span className="text-sm">{t.name}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========================
// Main Component
// =========================
export default function WebsiteKarangTarunaDusunBogor() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-blue-600 text-white grid place-items-center shadow">
              KT
            </div>
            <div className="leading-tight">
              <p className="font-bold">Karang Taruna Dusun Bogor</p>
              <p className="text-xs text-slate-500">Desa Kenteng · Bandungan</p>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-blue-700">{l.label}</a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-4">Pemuda Tangguh · Desa Maju</Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
              Karang Taruna <span className="text-blue-700">Dusun Bogor</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-0">
              Wadah pengembangan generasi muda Dusun Bogor untuk berkarya, berdaya,
              dan berkontribusi nyata bagi masyarakat.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative">
              <div className="absolute -inset-6 bg-blue-100/60 rounded-[2rem] blur-2xl" />
              <Card className="relative rounded-3xl shadow-xl">
                <CardContent className="p-0">
                  <img src="https://images.unsplash.com/photo-1521335751419-603f61523713?q=80&w=1400&auto=format&fit=crop" alt="Pemuda Dusun Bogor" className="rounded-3xl aspect-[4/3] object-cover" />
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tentang */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tentang Kami</h2>
          <p className="text-slate-600 mb-4">
            Karang Taruna Dusun Bogor adalah organisasi kepemudaan di bawah binaan
            pemerintah desa yang berfokus pada pengembangan karakter, ekonomi kreatif,
            dan kegiatan sosial kemasyarakatan. Kami berkolaborasi dengan warga, UMKM,
            sekolah, dan lembaga desa untuk menciptakan ekosistem pemuda yang aktif dan produktif.
          </p>
          <ul className="space-y-2 text-slate-700">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-700" /> Pembinaan kapasitas pemuda</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-700" /> Penguatan ekonomi kreatif lokal</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-700" /> Gerakan sosial dan lingkungan</li>
          </ul>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Pengurus</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {["Ketua", "Wakil", "Sekretaris", "Bendahara", "Humas", "Kreatif"].map((role, i) => (
              <Card key={i} className="rounded-3xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <img src={`https://source.unsplash.com/collection/895539/96x96?sig=${i}`} alt={role} className="w-16 h-16 rounded-2xl object-cover" />
                    <div>
                      <h3 className="font-semibold">Nama Pengurus</h3>
                      <p className="text-sm text-slate-600">{role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-3xl md:text-4xl font-bold">Galeri Kegiatan</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl">
                <img src={`https://images.unsplash.com/photo-1520975938055-1b3c6c790a88?q=80&w=1200&auto=format&fit=crop&sig=${i}`} alt="Galeri" className="aspect-square object-cover group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact (tanpa tombol Kirim Email/WhatsApp) */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kontak</h2>
          <p className="text-slate-600 mb-6">Silakan hubungi sekretariat melalui alamat atau telepon berikut.</p>
          <div className="space-y-3">
            {contacts.map((c, i) => (
              <div key={i} className="flex items-start gap-3 text-sm">
                <div className="mt-1 text-blue-700">{c.icon}</div>
                <div><div className="font-medium">{c.label}</div><div className="text-slate-600">{c.value}</div></div>
              </div>
            ))}
            <div className="flex gap-3 pt-2">
              <a href="#" className="p-2 rounded-xl border hover:bg-blue-50" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 rounded-xl border hover:bg-pink-50" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 rounded-xl border hover:bg-slate-50" aria-label="Website"><Globe className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Check Panel */}
      <DevSelfCheck />

      {/* Footer (2 kolom, tanpa jam sekretariat) */}
      <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-semibold">Karang Taruna Dusun Bogor</p>
            <p className="text-slate-600">Desa Kenteng · Kec. Bandungan · Kab. Semarang</p>
            <p className="mt-2">© {new Date().getFullYear()} Karang Taruna Dusun Bogor</p>
          </div>
          <div className="text-slate-600">
            <p className="font-semibold text-slate-800 mb-2">Navigasi</p>
            <div className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-blue-700 inline-flex items-center gap-1"><ChevronRight className="w-4 h-4" /> {l.label}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
