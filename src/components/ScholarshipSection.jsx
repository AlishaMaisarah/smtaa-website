import "./ScholarshipSection.css";
import { useState } from "react";

const scholarships = [
  {
    name: "Al Amin",
    hafazan: "30 juzuk [SYAHADAH]",
    scholarship: "RM450",
    contribution: "RM300",
    bond: "UIC, KTIS, KTEB",
  },
  {
    name: "As Syafie",
    hafazan: "15 juzuk ke bawah",
    scholarship: "RM400",
    contribution: "RM350",
    bond: "UIC, KTIS, KTEB",
  },
  {
    name: "Mathuridiah",
    hafazan: "Sekurang-kurangnya 5 juzuk",
    scholarship: "Tiada",
    contribution: "RM750",
    bond: "Tiada",
  },
];

export default function ScholarshipSection() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section
        id="biasiswa"
        className="scroll-mt-24 bg-[#f8f5ed] px-6 py-16 lg:px-8 scholarship-section"
    >
      <div className="scholarship-container">
        {/* Heading */}
        <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b08b45]">
                Bantuan Pendidikan
            </p>

        <h2 className="mt-4 text-4xl font-bold leading-tight text-[#174936] sm:text-5xl">
            Biasiswa & 
            <span className="block text-[#b88a45]">
            Bantuan Pendidikan
            </span>
        </h2>

        <p className="mt-5 text-base leading-8 text-[#64766d]">
            Ketahui peluang biasiswa dan bantuan pendidikan yang tersedia
            untuk membantu perjalanan pembelajaran pelajar SMTAA.
        </p>
        </div>

        <div className="scholarship-grid mt-12">
          {scholarships.map((item) => (
            <article
              className="scholarship-card"
              key={item.name}
            >

              <h3>{item.name}</h3>

              <div className="scholarship-amount">
                <span>Biasiswa bulanan</span>
                <strong>{item.scholarship}</strong>
              </div>

              <div className="scholarship-divider" />

              <div className="scholarship-info">
                <span>Maklumat hafazan</span>
                <p>{item.hafazan}</p>
              </div>

              <div className="scholarship-info">
                <span>Bulanan dinyatakan sendiri</span>
                <p>{item.contribution}</p>
              </div>

              <div className="scholarship-info">
                <span>Bond</span>
                <p>{item.bond}</p>
              </div>
            </article>
          ))}
        </div>

        {/*<div className="scholarship-note">
          <span className="note-icon">ⓘ</span>
          <p>
            Maklumat ini berdasarkan poster biasiswa SMTAA.
            Sila hubungi pihak sekolah untuk pengesahan syarat,
            jumlah bayaran dan kelayakan terkini.
          </p>
        </div>*/} 

        <div className="scholarship-actions">
          <button
            type="button"
            className="scholarship-details-button"
            onClick={() => setShowDetails(!showDetails)}
            aria-expanded={showDetails}
          >
            {showDetails
              ? "Tutup maklumat"
              : "Lihat maklumat lanjut"}
            <span>{showDetails ? "−" : "↗"}</span>
          </button>
        </div>

        {showDetails && (
          <div className="scholarship-extra">
            <h3>Sebelum pendaftaran, sila: </h3>
            <ul>
              <li>
                1. Sahkan syarat hafazan bagi setiap kategori.
              </li>
              <li>
                2. Dapatkan penjelasan tentang biasiswa dan
                sumbangan bulanan.
              </li>
              <li>
                3. Semak syarat ikatan, peperiksaan dan laluan
                pendidikan bagi kategori yang berkenaan.
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
