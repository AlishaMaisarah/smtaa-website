import "./ScholarshipSection.css";
import { useState } from "react";

const scholarships = [
  {
    name: "Al Attas",
    hafazan: "30 juzuk dan syahadah",
    scholarship: "RM600",
    contribution: "RM150",
    featured: true,
  },
  {
    name: "Al Amin",
    hafazan: "25 juzuk ke bawah",
    scholarship: "RM500",
    contribution: "RM250",
  },
  {
    name: "As Syafie",
    hafazan: "15 juzuk ke bawah",
    scholarship: "RM400",
    contribution: "RM350",
  },
  {
    name: "Mathuridiah",
    hafazan: "Sila sahkan syarat hafazan",
    scholarship: "Tiada",
    contribution: "RM250",
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

        <div className="scholarship-grid">
          {scholarships.map((item) => (
            <article
              className={`scholarship-card ${
                item.featured ? "featured" : ""
              }`}
              key={item.name}
            >
              <div className="scholarship-card-top">
                <span className="scholarship-icon">✦</span>
                <span className="scholarship-label">
                  {item.scholarship === "Tiada"
                    ? "Bantuan pengajian"
                    : "Kategori biasiswa"}
                </span>
              </div>

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
                <span>Sumbangan bulanan dinyatakan</span>
                <p>{item.contribution}</p>
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
            <h3>Maklumat sebelum pendaftaran</h3>
            <ul>
              <li>
                Sahkan syarat hafazan bagi setiap kategori.
              </li>
              <li>
                Dapatkan penjelasan tentang biasiswa dan
                sumbangan bulanan.
              </li>
              <li>
                Semak syarat ikatan, peperiksaan dan laluan
                pendidikan bagi kategori yang berkenaan.
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
